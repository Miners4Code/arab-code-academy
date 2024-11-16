import { Icon } from "@chakra-ui/react";
import React from "react";

const Diamond = () => {
  return (
    <Icon
      fontSize={{
        base: "180px",
        md: "240px",
        lg: "220px",
      }}
    >
      <svg
        width={180}
        height={180}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_600_1467"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={180}
          height={180}
        >
          <rect width={180} height={180} fill="url(#pattern0_600_1467)" />
        </mask>
        <g mask="url(#mask0_600_1467)">
          <rect width={180} height={180} fill="white" />
        </g>
        <defs>
          <pattern
            id="pattern0_600_1467"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_600_1467" transform="scale(0.00195312)" />
          </pattern>
          <image
            id="image0_600_1467"
            width={512}
            height={512}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Icon>
  );
};

export default Diamond;