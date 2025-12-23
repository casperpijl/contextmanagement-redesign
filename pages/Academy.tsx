import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import Button from '../components/Button';
import InputField from '../components/ui/InputField';

const Academy: React.FC = () => {
    return (
        <div className="bg-brand-light min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
                     <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-lime/20 rounded-full blur-[100px]" />
                     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-8 leading-tight"
                        >
                            Contextmanagement toepassen in jouw rol?<br />
                            <span className="italic text-brand-lime mix-blend-multiply block mt-2">Ontdek de academy</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-brand-muted space-y-6 max-w-2xl mx-auto mb-12"
                        >
                            <p>
                                De academy van contextmanagement biedt voor iedereen de noodzakelijke kennis en vaardigheden om prettig samen te werken in een <a href="https://www.contextmanagement.nl/contextgestuurde-organisatie" className="text-brand-dark underline decoration-brand-lime underline-offset-4 hover:bg-brand-lime/20 transition-colors">contextgestuurde organisatie.</a>
                            </p>
                            <p>
                                Op het leerplatform zijn online cursussen beschikbaar voor iedereen. Of je nu uitvoerend medewerker of bestuurder bent; deze cursussen geven je de noodzakelijke basiskennis om contextmanagement in jouw rol toe te passen. Ze zijn direct toegankelijk.
                            </p>
                            <p className="font-medium text-brand-dark bg-white/50 p-6 rounded-2xl border border-brand-lime/20">
                                Ben je <a href="https://www.contextmanagement.nl/leidinggevenden" className="underline decoration-brand-lime">leidinggevende</a>, <a href="https://www.contextmanagement.nl/hr-professionals" className="underline decoration-brand-lime">HR-professional</a> of <a href="https://www.contextmanagement.nl/adviseurs" className="underline decoration-brand-lime">adviseur</a>? 
                                <span className="block mt-2 font-normal text-brand-muted">Alle online cursussen van het leerplatform zijn inbegrepen in de volgende opleidingen:</span>
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button 
                                label="Contextbewust Leidinggeven" 
                                href="https://www.contextmanagement.nl/contextbewust-leidinggeven" 
                                variant="outline"
                                target="_blank"
                                className="min-w-[280px]"
                            />
                            <Button 
                                label="Contextbewust Adviseren" 
                                href="https://www.contextmanagement.nl/contextbewust-adviseren" 
                                variant="primary"
                                className="min-w-[280px]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark italic relative inline-block">
                                Gratis cursussen
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-lime rounded-full"></div>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Course Card 1 */}
                            <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_c674c8b393ec4f73a2dbc04d79b22ee3~mv2.png/v1/fill/w_620,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(16)_edited_edited.png"
                                title="Wat is contextmanagement?"
                                description="In deze cursus leer je de basisprincipes achter contextmanagement. Je ontdekt waarom samenwerking van nature vanzelfsprekend is, maar ook waarom het logisch is dat teamgedoe snel ontstaat."
                                link="https://academy.contextmanagement.nl/resources/wat-is-contextmanagement"
                            />

                             {/* Course Card 2 */}
                             <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_7f4c16bd0a0c418d968954635af6c361~mv2.png/v1/fill/w_620,h_564,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(17)_edited.png"
                                title="Waarom populaire teaminterventies falen."
                                description="In deze cursus leer je waarom populaire interventies zoals trainingen op aanspreken, coaching op eigenaarschap en het inzetten van leiderschaps- en kleurenprofielen meestal teleurstellen en samenwerking soms zelfs verslechteren."
                                link="https://academy.contextmanagement.nl/resources/teaminterventies"
                            />
                        </div>
                    </div>
                </div>
            </section>

             {/* Paid Courses Section */}
             <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark italic relative inline-block">
                                Betaalde cursussen
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-lime rounded-full"></div>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_05b55ef0c13e41e5ba9ecfa0769d8ca8~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(11)_edited.png"
                                title="Contextbewust kijken naar samenwerking"
                                description="In deze cursus leer je anders te kijken naar terugkerende samenwerkingsproblemen in teams. Je ontdekt waarom  ongewenst gedrag van collega’s vaak ten onrechte wordt gezien als gebrek aan eigenaarschap of betrokkenheid."
                                link="https://academy.contextmanagement.nl/resources/contextbewust-kijken"
                                price="€ 45,00"
                                buttonLabel="Meer informatie"
                            />
                             <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_fddf07a35c30443196b6c221c653dd96~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(8)_edited.png"
                                title="Contextbewust communiceren over samenwerking"
                                description="In deze cursus leer je hoe je problemen in samenwerking effectief bespreekbaar maakt, zonder verwijten of weerstand. Je ontdekt hoe je gesprekken over gedrag kunt verschuiven naar gesprekken over de context waarin dat gedrag ontstaat."
                                link="https://academy.contextmanagement.nl/resources/contextbewust-communiceren"
                                price="€ 295,00"
                                buttonLabel="Meer informatie"
                            />
                             <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_7641652cfb944e97b1882cc2262836be~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(13)_edited.png"
                                title="Creëer in 6 stappen de werkomgeving die jij nodig hebt"
                                description="In deze cursus leer je hoe je in zes praktische stappen zelf je werkomgeving kunt verbeteren. Je ontdekt hoe je verwachtingen helder maakt, prioriteiten scherp krijgt en obstakels structureel wegneemt."
                                link="https://academy.contextmanagement.nl/resources/succesvoller-werken-creeer-zelf-de-werkomgeving-die-jij-nodig-hebt"
                                price="€ 145,00"
                                buttonLabel="Meer informatie"
                            />
                             <CourseCard 
                                image="https://static.wixstatic.com/media/215a32_720e4988f8ac47eebab97bba82ff0923~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MODULE%20(10)_edited.png"
                                title="De kracht van accepteren"
                                description="In deze cursus leer je effectief omgaan met werksituaties die je zelf niet kunt veranderen. Je ontdekt hoe je helder krijgt wat je wél en niet kunt beïnvloeden in jouw werkomgeving, en hoe je grenzen bewaakt zonder machteloosheid of frustratie."
                                link="https://academy.contextmanagement.nl/resources/de-kracht-van-accepteren-jouw-invloed-in-een-onveranderbare-context"
                                price="€ 125,00"
                                buttonLabel="Meer informatie"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-brand-light rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden relative">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-60" />
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-dark leading-tight">
                                    Wil jij contextbewustzijn in jullie leiderschapsontwikkeling integreren?
                                </h2>
                                <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
                                    <p>
                                        De academy biedt dé basis voor een vernieuwend onderwijsprogramma.
                                    </p>
                                    <p>
                                        Stel jouw vraag en wij nemen contact op.
                                    </p>
                                </div>
                                <div className="hidden lg:flex items-center gap-4 text-brand-lime pt-4">
                                     <span className="font-serif italic text-lg font-medium">Neem contact op</span>
                                     <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                                <h3 className="font-serif text-3xl text-brand-dark italic mb-8 text-center">Stel jouw vraag</h3>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <InputField 
                                            label="Voornaam"
                                            name="firstName"
                                        />
                                        <InputField 
                                            label="Achternaam"
                                            name="lastName"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <InputField 
                                            label="Email *"
                                            name="email"
                                            type="email"
                                            required
                                        />
                                        <InputField 
                                            label="Telefoon"
                                            name="phone"
                                            type="tel"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <InputField 
                                            label="Bericht"
                                            name="message"
                                            textarea
                                            rows={4}
                                        />
                                    </div>
                                    <Button 
                                        label="Verzenden"
                                        href="#" 
                                        variant="primary"
                                        className="w-full justify-center text-lg"
                                    /> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

interface CourseCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    price?: string;
    buttonLabel?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description, link, price, buttonLabel = "Start direct" }) => {
    return (
        <div className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full">
            <div className="relative h-64 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="flex flex-col flex-grow p-8">
                <h3 className="font-serif text-2xl text-brand-dark italic mb-4 group-hover:text-brand-lime transition-colors duration-300 line-clamp-2">
                    {title}
                </h3>
                <p className="text-brand-muted mb-6 flex-grow leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="font-serif italic text-lg text-brand-dark">{price || "Gratis"}</span>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-dark text-white rounded-lg hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 font-medium text-sm group/btn flex-shrink-0"
                    >
                        {buttonLabel}
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Academy;
