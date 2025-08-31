
function Home() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-between h-full w-full py-8">
        {/* Título que ocupa casi toda la pantalla */}
        <div className="flex justify-center items-center w-full flex-grow">
          <h1 className='font-cyberpunk text-cyan-primary font-bold text-center'
              style={{
                fontSize: 'clamp(80px, 15vw, 450px)', // ¡Mucho más grande!
                lineHeight: '0.8',
                textShadow: '8px 8px #ff0ca8',
                letterSpacing: '-0.02em'
              }}>
            DATA 
            <br />
            RUNNERS
          </h1>
        </div>
        
        {/* Botón también más grande */}
        <div className="flex justify-center w-full">
          <button className="bg-pink-500 text-white font-bold rounded-full 
                           hover:bg-pink-600 transition-all duration-300 
                           shadow-2xl hover:shadow-pink-500/60 
                           transform hover:scale-110"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 60px)',
                    padding: 'clamp(16px, 3vh, 40px) clamp(32px, 6vw, 100px)'
                  }}>
            Iniciar Juego
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;