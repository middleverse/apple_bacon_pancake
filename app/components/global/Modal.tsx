import "./modal.css";

import tw, { styled, css } from "twin.macro";

const bagItemInfoStyles = css`
   {
    margin-top: 0.5em;
  }
`;

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div
      css={[bagItemInfoStyles, tw`flex w-full flex-col ml-4`]}
      className={showHideClassName}
    >
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
