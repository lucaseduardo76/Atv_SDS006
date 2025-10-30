import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "./assets/Error.json";

const customStyles = `
  .success-card-styles {
    background: linear-gradient(136deg, rgba(51, 50, 80, 0.25) 23.91%, rgba(86, 84, 147, 0.25) 64.78%, rgba(48, 47, 90, 0.25) 94.97%);
    box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export default function ModalSucesso() {
  return (
    <>
      <style>{customStyles}</style>

      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
        <div className="success-card-styles bg-zinc-900 w-full max-w-md rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden">
          <h2 className="text-2xl text-white mb-4">SUCESSO</h2>

          <p className="text-lg text-zinc-400 mb-4">
            Vishhhh, deu erro...
          </p>

            <Lottie
              animationData={errorAnimation}
              loop={false}
              autoplay={true}
              style={{ width: 160, height: 160 }}
            />

          <p className="text-base text-zinc-400 mt-6">
            Bom, pelo menos não tem nada para fazer aqui...
          </p>
        </div>
      </div>
    </>
  );
}
