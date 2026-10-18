import { useState } from "react";
import { Image, Video, Trash2, AlertCircle, Loader2 } from "lucide-react";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm"];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function EvidenceUploader({ onChange, onRemove }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const isImage = (f) => ACCEPTED_IMAGE_TYPES.includes(f.type);
  const isVideo = (f) => ACCEPTED_VIDEO_TYPES.includes(f.type);

  const handleFileSelect = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setError(null);
    e.target.value = "";

    if (!isImage(selected) && !isVideo(selected)) {
      setError(
        "Unsupported file type. Please upload JPG, JPEG, PNG, WebP, MP4, or WebM."
      );
      return;
    }

    if (selected.size > MAX_FILE_SIZE_BYTES) {
      setError(
        `File too large. Maximum size is ${MAX_FILE_SIZE_MB} MB.`
      );
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    onChange(selected);
  };

  const handleRemove = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setError(null);
    setUploading(false);
    setProgress(0);
    onRemove();
  };

  const simulateUpload = () => {
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return p + 10;
      });
    }, 200);
    return () => clearInterval(interval);
  };

  const isMedia = isImage(file) || isVideo(file);

  return (
    <div className="space-y-3">
      <label className="mb-1 block text-sm font-medium text-slate-700">
        Evidence (photo or video)
      </label>

      {error && (
        <div className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700 flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <div className="relative flex-1">
          <input
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.concat(ACCEPTED_VIDEO_TYPES).join(",")}
            onChange={handleFileSelect}
            className="sr-only"
          />
          <button
            type="button"
            onClick={() => document.querySelector('input[type="file"]').click()}
            disabled={uploading}
            className={`w-full rounded border px-4 py-3 text-sm ${
              isMedia
                ? "border-slate-300 bg-white hover:bg-slate-50 text-slate-700"
                : "border-dashed border-slate-300 text-slate-500"
            } disabled:opacity-60`}
          >
            {isMedia ? (
              <>
                <Image className="h-4 w-4 mr-2" /> Change file
              </>
            ) : (
              <>
                <Image className="h-4 w-4 mr-2" /> Upload image or video
              </>
            )}
          </button>
          <p className="mt-1 text-xs text-slate-400">
            JPG, PNG, WebP, MP4, WebM • Max {MAX_FILE_SIZE_MB} MB
          </p>
        </div>

        {isMedia && (
          <div className="w-full sm:w-48 flex items-center gap-2">
            <button
              type="button"
              onClick={handleRemove}
              disabled={uploading}
              className="flex-1 flex items-center justify-center gap-2 rounded border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-100 disabled:opacity-60"
            >
              <Trash2 className="h-3 w-3" /> Remove
            </button>
          </div>
        )}
      </div>

      {preview && !uploading && (
        <div className="rounded-lg border border-slate-200 bg-white p-3 flex items-center gap-3">
          {isImage(file) ? (
            <img src={preview} alt="Preview" className="h-16 w-24 object-cover rounded border border-slate-200" />
          ) : (
            <video
              src={preview}
              alt="Preview"
              className="h-16 w-24 object-cover rounded border border-slate-200"
              preload="metadata"
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="truncate text-sm font-medium text-slate-700">{file.name}</div>
            <div className="text-xs text-slate-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB • {isImage(file) ? "Image" : "Video"}
            </div>
          </div>
        </div>
      )}

      {uploading && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 flex items-center gap-3">
          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
          <div className="flex-1">
            <div className="text-sm font-medium text-blue-800">Uploading evidence...</div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <div className="text-xs text-blue-600 mt-1">{progress}%</div>
          </div>
        </div>
      )}
    </div>
  );
}
