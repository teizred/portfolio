import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import emailIcon from '../../assets/icons/email.png';
import { ArrowRight } from 'phosphor-react';

const EMAILJS_SERVICE_ID  = 'service_fhnw8fa';
const EMAILJS_TEMPLATE_ID = 'template_ujxsbnr';
const EMAILJS_PUBLIC_KEY  = 'AXjZnpEhsa5R0WS73';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative min-h-screen bg-transparent w-full px-6 md:px-8 pt-28 pb-20 flex items-start md:items-center">
            <div className="max-w-5xl mx-auto w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold font-magilo text-amber-400 mb-4">
                        Contact
                    </h1>
                    <p className="text-white text-lg max-w-xl mx-auto">
                        Une question, une opportunité ou juste envie de discuter ? <br />Je suis disponible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-2xl font-bold font-magilo text-white mb-2">Parlons-en</h2>
                            <p className="text-white leading-relaxed">
                                Je suis actuellement disponible pour des opportunités en développement web — stages où alternances.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Email */}
                            <a
                                href="mailto:jathurshan.suventhiran@gmail.com"
                                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-400/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 text-xl shrink-0 group-hover:bg-amber-400/20 transition-colors">
                                    <img src={emailIcon} alt="Email" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-black uppercase tracking-widest mb-0.5">Email</p>
                                    <p className="text-white font-medium">jathurshan.suventhiran@gmail.com</p>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/teizred"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-400/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 text-xl shrink-0 group-hover:bg-amber-400/20 transition-colors">
                                    <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-black uppercase tracking-widest mb-0.5">GitHub</p>
                                    <p className="text-white font-medium">github.com/teizred</p>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/teizred"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-400/50 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 text-xl shrink-0 group-hover:bg-amber-400/20 transition-colors">
                                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-black uppercase tracking-widest mb-0.5">LinkedIn</p>
                                    <p className="text-white font-medium">linkedin.com/in/jathurshan-suventhiran</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                                <div className="text-5xl">🎉</div>
                                <h3 className="text-2xl font-bold font-magilo text-amber-400">Message envoyé !</h3>
                                <p className="text-gray-400">Merci, je vous répondrai dans les plus brefs délais.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-sm text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-white uppercase tracking-widest">Nom</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        placeholder="Jean Dupont"
                                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-white uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        placeholder="jean@exemple.com"
                                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs text-white uppercase tracking-widest">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Bonjour, je souhaite..."
                                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors duration-300 resize-none"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm text-center">
                                        Une erreur est survenue. Veuillez réessayer.
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="group mt-2 bg-amber-400 text-black font-bold font-dm-serif px-6 py-3.5 rounded-full hover:bg-amber-300 transition-colors duration-300 w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Envoi en cours...' : (
                                        <>Envoyer le message <span className="group-hover:translate-x-1.5 transition-transform duration-300"><ArrowRight size={20} weight="bold" /></span></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
