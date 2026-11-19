import { useState } from "react";
import Icon from "./Icon";

export default function ProjectImage({ src, alt, title }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="project-img project-img-fallback">
        <div className="mock-bar">
          <i />
          <i />
          <i />
        </div>

        <div className="mock-body">
          <Icon type="file" size={38} />
          <strong>{title}</strong>
          <span>
            Add screenshot to:
            <br />
            public{src}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-img">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}