import React, { FC } from "react";
import QR from "public/images/qr.svg";
declare interface ConnectProps {
  className: string;
}
const Connect: FC<ConnectProps> = ({ className }) => {
  const _prefix = `${className}-connect`;
  return (
    <div className={_prefix}>
      <div className={`${_prefix}--wrapper`}>
        <div className="left">
          <div className="title mb-4">Get The App</div>
          <div className="subtitle">
            Love this title? Scan the QR code to continue reading right on your
            mobile devices.
          </div>
        </div>

        <div
          className="right"
          style={{ backgroundImage: `url(${QR.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default Connect;
