import { useState } from "react";
import PropTypes from "prop-types";

export default function ProfileUploader({ onUpload, onClose }) {
  const [preview, setPreview] = useState(null);

  const handleFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) handleFile(f);
  };

  const save = () => {
    if (!preview) return;
    try {
      localStorage.setItem("kapish_profile_image", preview);
      onUpload(preview);
      onClose();
    } catch (err) {
      console.error("Failed to save profile image", err);
      alert("Failed to save image to local storage. Your browser may be restricting storage.");
    }
  };

  const remove = () => {
    localStorage.removeItem("kapish_profile_image");
    onUpload(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-slate-900 rounded-lg p-6 w-[min(560px,92%)] border border-neutral-800">
        <h3 className="text-lg font-semibold mb-3">Upload Profile Image</h3>
        <p className="text-sm text-neutral-400 mb-3">
          Choose a square image (PNG/JPEG). The image is stored locally in your browser.
        </p>

        <div className="flex gap-4 items-center">
          <div className="w-28 h-28 bg-neutral-800 rounded overflow-hidden flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-sm text-neutral-500">Preview</div>
            )}
          </div>

          <div className="flex-1">
            <input type="file" accept="image/*" onChange={onFileChange} />
            <div className="mt-4 flex gap-2">
              <button
                onClick={save}
                disabled={!preview}
                className="rounded-md bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
              >
                Save
              </button>
              <button
                onClick={remove}
                className="rounded-md border border-neutral-700 px-4 py-2 text-neutral-300"
              >
                Remove
              </button>
              <button
                onClick={onClose}
                className="rounded-md border border-neutral-700 px-4 py-2 text-neutral-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileUploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
