import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Target, Award, Users, Heart } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À propos de <span className="gradient-text">SayKee</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre mission : démocratiser l'accès à l'éducation financière et entrepreneuriale
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80"
                alt="Elias Benguezzou"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Elias Benguezzou</h2>
              <p className="text-gray-300 text-lg mb-4">
                Fondateur de SayKee, entrepreneur passionné par l'éducation financière et le développement des compétences entrepreneuriales.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                Avec plus de 10 ans d'expérience dans le trading et l'e-commerce, j'ai créé SayKee pour partager mes connaissances et aider les autres à réussir dans ces domaines.
              </p>
              <p className="text-gray-300 text-lg">
                Ma vision est simple : rendre l'apprentissage accessible, interactif et efficace pour tous, quel que soit votre niveau de départ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-400">
              Ce qui nous guide au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur border-blue-800/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nous nous engageons à fournir des formations de la plus haute qualité
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-blue-800/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">Accessibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  L'éducation de qualité doit être accessible à tous
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-blue-800/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-yellow-400" />
                </div>
                <CardTitle className="text-white">Résultats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nous mesurons notre succès par vos réussites
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-blue-800/50 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-red-400" />
                </div>
                <CardTitle className="text-white">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Notre passion pour l'enseignement anime chaque formation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-800/50">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Notre Histoire</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 text-lg">
              <p>
                SayKee est né d'une vision simple mais ambitieuse : rendre l'apprentissage du trading et de l'e-commerce accessible à tous, indépendamment du niveau de départ.
              </p>
              <p>
                Après avoir constaté le manque de formations pratiques et interactives dans ces domaines, j'ai décidé de créer une plateforme qui combine théorie et pratique, avec des modules adaptés à tous les niveaux.
              </p>
              <p>
                Aujourd'hui, SayKee compte plus de 2 500 étudiants actifs et continue de grandir grâce à la qualité de nos formations et l'engagement de notre communauté.
              </p>
              <p className="font-semibold text-white">
                Notre objectif ? Vous donner toutes les clés pour réussir dans le trading et l'e-commerce.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">SayKee en chiffres</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">2,500+</div>
              <div className="text-xl text-gray-300">Étudiants actifs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">94%</div>
              <div className="text-xl text-gray-300">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">200+</div>
              <div className="text-xl text-gray-300">Heures de contenu</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
