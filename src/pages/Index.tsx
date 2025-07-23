import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-wadik text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Гардеробные системы
            <br />
            <span className="text-white/90">премиум-класса</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans animate-fade-in">
            Создаем уникальные решения для хранения, которые превращают ваш дом в образец стиля и функциональности
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover-scale">
              <Icon name="Eye" className="mr-2" size={20} />
              Посмотреть проекты
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              Более 500 реализованных проектов гардеробных и систем хранения
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover-scale transition-all duration-300 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Ruler" size={32} className="text-white" />
                </div>
                <h3 className="font-wadik text-xl font-semibold mb-4">Индивидуальный дизайн</h3>
                <p className="text-gray-600 font-sans">Создаем проекты под ваши потребности и особенности пространства</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-scale transition-all duration-300 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h3 className="font-wadik text-xl font-semibold mb-4">Премиум материалы</h3>
                <p className="text-gray-600 font-sans">Используем только качественные материалы от ведущих европейских производителей</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-scale transition-all duration-300 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <h3 className="font-wadik text-xl font-semibold mb-4">Быстрая установка</h3>
                <p className="text-gray-600 font-sans">Монтаж гардеробной системы за 1-2 дня с гарантией качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              Примеры реализованных проектов гардеробных комнат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover-scale transition-all duration-300">
              <img 
                src="/img/ea5a0d27-f874-438e-8987-335788dfb2b8.jpg" 
                alt="Современная гардеробная система"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-wadik text-xl font-semibold mb-2">Минималистичная гардеробная</h3>
                <p className="text-white/90">Современное решение для городской квартиры</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover-scale transition-all duration-300">
              <img 
                src="/img/a0af5777-c19d-423a-b5cb-9b4f12688391.jpg" 
                alt="Просторная гардеробная комната"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-wadik text-xl font-semibold mb-2">Гардеробная премиум</h3>
                <p className="text-white/90">Роскошное пространство для хранения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              Что говорят о нашей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-wadik font-semibold">АМ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-wadik font-semibold">Анна Михайлова</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-sans leading-relaxed">
                  "Превосходное качество работы! Гардеробная получилась именно такой, как я мечтала. 
                  Все продумано до мелочей, очень функционально и красиво."
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-wadik font-semibold">ДС</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-wadik font-semibold">Дмитрий Соколов</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-sans leading-relaxed">
                  "Профессиональный подход на всех этапах. От дизайна до установки - всё выполнено 
                  на высшем уровне. Рекомендую всем друзьям!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Order Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-wadik text-4xl font-bold mb-6">
            Готовы создать гардеробную мечты?
          </h2>
          <p className="text-xl mb-8 text-white/90 font-sans">
            Оставьте заявку и получите бесплатную консультацию дизайнера
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-semibold mb-2">Телефон</h3>
              <p className="text-white/90">+7 (495) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-semibold mb-2">Email</h3>
              <p className="text-white/90">info@wardrobe-premium.ru</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-semibold mb-2">Адрес</h3>
              <p className="text-white/90">г. Москва, ул. Тверская, 1</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover-scale">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="font-wadik text-2xl font-bold mb-4">Wardrobe Premium</h3>
          <p className="text-gray-400 mb-6 font-sans">
            Создаем гардеробные системы премиум-класса с 2018 года
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Youtube" size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-gray-500 text-sm">© 2024 Wardrobe Premium. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;