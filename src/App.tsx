import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left Side - Auth Form */}
        <div className="bg-zinc-900 rounded-3xl lg:rounded-r-none p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Logo */}
            <div className="mb-12">
              <h1 className="text-white">Atividade de Paranhos</h1>
            </div>

            {/* Welcome Text */}
            <div className="mb-8">
              <h2 className="text-white mb-2">
                {isSignUp ? 'Criar nova conta' : 'Bem vindo de volta'}
              </h2>
              <p className="text-zinc-400">
                {isSignUp 
                  ? 'Informe seus dados para criar uma conta!' 
                  : 'Coloque suas informações de login para acessar a sua conta!'}
              </p>
            </div>

            {/* Toggle */}
            <div className="flex gap-2 mb-8 bg-zinc-800 rounded-xl p-1 flex justify-center items-center">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                  !isSignUp 
                    ? 'bg-green-600 text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                  isSignUp 
                    ? 'bg-green-600 text-white' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Criar conta
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field - Only for Sign Up */}
              {isSignUp && (
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  />
                </div>
              )}

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Endereço de e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-green-600 transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Senha segura"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-green-600 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Confirm Password Field - Only for Sign Up */}
              {isSignUp && (
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                    <Lock size={20} />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirmar Senha"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-green-600 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}

              {/* Forgot Password - Only for Sign In */}
              {!isSignUp && (
                <div className="text-right">
                  <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
                    Esqueci a minha senha
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 transition-all duration-300 mt-6"
              >
                {isSignUp ? 'Criar conta' : 'Entrar'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 mt-8 mb-4">
              <div className="flex-1 h-px bg-zinc-800"></div>
              <span className="text-zinc-500">Ou continue com...</span>
              <div className="flex-1 h-px bg-zinc-800"></div>
            </div>

            {/* Social Login */}
            <div className="flex gap-4">
              <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 10.033C19.9969 12.4854 19.1001 14.852 17.4787 16.687C15.8573 18.522 13.6232 19.6988 11.1971 19.9957C11.1431 20.0019 11.0884 19.9964 11.0366 19.9798C10.9848 19.9632 10.9371 19.9357 10.8967 19.8993C10.8563 19.8628 10.824 19.8181 10.802 19.7682C10.78 19.7184 10.7689 19.6643 10.7692 19.6098V12.3486H13.0769C13.1824 12.3488 13.2867 12.3273 13.3835 12.2853C13.4804 12.2434 13.5675 12.1819 13.6397 12.1047C13.7118 12.0275 13.7674 11.9363 13.8029 11.8367C13.8384 11.737 13.8531 11.6311 13.8461 11.5256C13.8291 11.3271 13.7379 11.1424 13.5907 11.0087C13.4436 10.875 13.2514 10.8022 13.0529 10.8048H10.7692V8.48927C10.7692 8.07985 10.9313 7.6872 11.2198 7.3977C11.5083 7.1082 11.8996 6.94556 12.3077 6.94556H13.8461C13.9516 6.94579 14.056 6.92426 14.1528 6.88232C14.2496 6.84037 14.3368 6.7789 14.4089 6.70172C14.4811 6.62454 14.5366 6.5333 14.5721 6.43367C14.6076 6.33404 14.6224 6.22814 14.6154 6.12256C14.5984 5.92375 14.5068 5.7388 14.3592 5.60504C14.2117 5.47129 14.019 5.39867 13.8202 5.40184H12.3077C11.4916 5.40184 10.709 5.72712 10.132 6.30613C9.55492 6.88513 9.23075 7.67043 9.23075 8.48927V10.8048H6.92305C6.8176 10.8046 6.71322 10.8261 6.61641 10.8681C6.5196 10.91 6.43242 10.9715 6.36028 11.0487C6.28814 11.1259 6.23259 11.2171 6.19707 11.3167C6.16155 11.4164 6.14683 11.5223 6.15382 11.6278C6.17083 11.8267 6.26236 12.0116 6.40994 12.1454C6.55752 12.2791 6.75016 12.3517 6.94901 12.3486H9.23075V19.6117C9.23107 19.6662 9.21991 19.7201 9.198 19.7699C9.17608 19.8197 9.1439 19.8643 9.10357 19.9008C9.06325 19.9373 9.01569 19.9647 8.96403 19.9814C8.91237 19.9981 8.85777 20.0036 8.80382 19.9977C6.31281 19.6933 4.02647 18.4616 2.39734 16.5464C0.768212 14.6312 -0.0849631 12.172 0.0066871 9.65574C0.198995 4.44571 4.40477 0.210141 9.60094 0.0075283C10.9462 -0.0447592 12.2882 0.175746 13.5466 0.655854C14.805 1.13596 15.9539 1.86581 16.9248 2.80174C17.8956 3.73768 18.6683 4.86047 19.1967 6.10295C19.7251 7.34544 19.9983 8.6821 20 10.033Z"/>
                </svg>
                Facebook [em breve]
              </button>
            </div>

            <p className="text-zinc-500 text-center mt-8">
              Trabalho em grupo por Ianca Garcia, Lucas Eduardo, Paula Alves e Pedro Lucas
            </p>
          </div>
        </div>

        {/* Right Side - Image with Glass Card */}
        <div className="relative bg-zinc-900 rounded-3xl lg:rounded-l-none overflow-hidden min-h-[600px] lg:min-h-0">
          {/* Background Image */}
          <img 
            src={"https://img.freepik.com/fotos-gratis/close-up-de-maos-segurando-uma-planta_23-2148743140.jpg"} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Glass Card Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md shadow-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Lock className="text-black" size={24} />
              </div>
              <h3 className="text-black mb-4">
                Essa atividade é para entendermos melhor como funcionam as APIs do Google e do Facebook!
              </h3>
              <p className="text-black/80  mb-4">
                Em breve iremos apresentar qual das duas opções achamos mais fáceis e qual consideramos a melhor, a partir de conhecimento empírico.
              </p>
              <p className="text-black/80">
                Próximos passos:
              </p>
              
              {/* Feature List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-black/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Seminário API facebook vs. API google</span>
                </div>
                <div className="flex items-center gap-3 text-black/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Criação de um webservice</span>
                </div>
                <div className="flex items-center gap-3 text-black/90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Utilização da AWS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
