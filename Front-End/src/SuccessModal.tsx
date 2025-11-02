import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import checkAnimation from "./assets/Success.json";

const customStyles = `
  .success-card-styles {
    background: linear-gradient(136deg, rgba(51, 50, 80, 0.25) 23.91%, rgba(86, 84, 147, 0.25) 64.78%, rgba(48, 47, 90, 0.25) 94.97%);
    box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export default function SuccessModal() {
  const [user, setUser] = useState<string | null>(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/user", {
      credentials: "include", // envia cookies da sessão
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Erro: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data)
        const name = data?.authorities?.[0]?.attributes?.name;
        const pic = data?.authorities?.[0]?.attributes?.picture
        if (!name) {

          navigate("/");
        } else {
          setUser(name);
          setImgUrl(pic);
          console.log(pic)
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar usuário:", err);
        navigate("/");
      });
  }, [navigate]);

  if (!user) return null;
  return (
    <>
      <style>{customStyles}</style>

      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
        <div className="success-card-styles bg-zinc-900 w-full max-w-md rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden">
          <h2 className="text-2xl text-white mb-4">SUCESSO</h2>
          <p className="text-lg text-zinc-400 mb-8">
            Boas notícias {user}! Você fez login com sucesso!
          </p>

          {showAnimation ? (
            <Lottie
              animationData={checkAnimation}
              loop={false}
              autoplay={true}
              style={{ width: 150, height: 150 }}
              onComplete={() => setShowAnimation(false)}
            />
          ) : (
            <img
              src={imgUrl}
              alt="Foto do usuário"
              className="my-[10px]"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}

          <p className="text-base text-zinc-400 mt-8">
            Mas não tem nada para fazer aqui...
          </p>
        </div>
      </div>
    </>
  );
}
