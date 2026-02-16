import backgroundImage from '../../assets/background.png';

export default function Hero() {
    return (
        <main>
            <section id="hero" className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
                
             {/* Background Image */}

            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Description */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="md:w-1/2 mb-10 md:mb-0 fade-in visible">
                    <h1 className="text-7xl md:text-8xl font-bold mb-6 font-magilo">
                        Développeur Web Full Stack <span className="text-amber-400">Junior</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 font-montserrat">
                        Je conçois des applications modernes, performantes et centrées sur l’utilisateur, en transformant des idées en solutions concrètes.
                    </p>
                </div>

            </div>

            {/* Image */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
               <img src="../../assets/hero.png" alt="" />
            </div>
        </section>
        </main>
        
    );
}