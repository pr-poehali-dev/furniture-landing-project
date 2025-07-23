import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-amber-700 to-orange-800"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="font-wadik text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Шкафы и системы хранения
            <br />
            <span className="text-amber-200">на заказ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-sans animate-fade-in max-w-3xl mx-auto">
            Создаем индивидуальные решения для вашего дома. Более 1000 готовых проектов. 
            Качество, функциональность и стиль в каждом изделии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale bg-white text-amber-700 hover:bg-amber-50">
              <Icon name="Phone" className="mr-2" size={20} />
              Бесплатная консультация
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-amber-700 hover-scale">
              <Icon name="Eye" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
          </div>
          <div className="mt-8 flex justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-wadik font-bold">1000+</div>
              <div className="text-sm">проектов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-wadik font-bold">15</div>
              <div className="text-sm">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-wadik font-bold">30</div>
              <div className="text-sm">дней гарантия</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Каталог шкафов
            </h2>
            <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
              Выберите подходящий тип шкафа или закажите индивидуальное решение
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover-scale transition-all duration-300 border-0 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/b53fc1a2-436e-4ad7-b004-256e5e5c470a.jpg" 
                  alt="Шкафы-купе"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-wadik text-2xl font-bold mb-1">Шкафы-купе</h3>
                  <p className="text-white/90 text-sm">От 25 000 ₽</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-sans">
                  Современные раздвижные системы для экономии пространства
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-semibold">Популярный выбор</span>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale transition-all duration-300 border-0 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/2f591992-8e35-42e9-bb6d-b52fa14a78f7.jpg" 
                  alt="Угловые шкафы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-wadik text-2xl font-bold mb-1">Угловые шкафы</h3>
                  <p className="text-white/90 text-sm">От 35 000 ₽</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-sans">
                  Максимальное использование угловых пространств
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Премиум</span>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-scale transition-all duration-300 border-0 shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="/img/7a8451b2-8ad3-46ac-8e8f-defdacbc7236.jpg" 
                  alt="Гардеробные"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-wadik text-2xl font-bold mb-1">Гардеробные</h3>
                  <p className="text-white/90 text-sm">От 45 000 ₽</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 font-sans">
                  Комплексные решения для организации пространства
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">Эксклюзив</span>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg hover-scale">
              <Icon name="Grid3x3" className="mr-2" size={20} />
              Посмотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
              15 лет создаем качественную мебель для дома
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Hammer" size={36} className="text-white" />
              </div>
              <h3 className="font-wadik text-2xl font-bold mb-4 text-gray-900">Собственное производство</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Контролируем качество на каждом этапе. Используем только проверенные материалы и фурнитуру.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Ruler" size={36} className="text-white" />
              </div>
              <h3 className="font-wadik text-2xl font-bold mb-4 text-gray-900">Индивидуальные размеры</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Изготавливаем шкафы точно под ваши размеры. Каждый миллиметр пространства используется эффективно.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Clock" size={36} className="text-white" />
              </div>
              <h3 className="font-wadik text-2xl font-bold mb-4 text-gray-900">Быстрые сроки</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                Изготовление от 7 дней. Установка за 1 день. Полная гарантия на всю продукцию.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-wadik font-bold text-amber-600 mb-2">1000+</div>
                <div className="text-gray-600 font-sans">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-wadik font-bold text-amber-600 mb-2">15</div>
                <div className="text-gray-600 font-sans">Лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl font-wadik font-bold text-amber-600 mb-2">7</div>
                <div className="text-gray-600 font-sans">Дней изготовление</div>
              </div>
              <div>
                <div className="text-3xl font-wadik font-bold text-amber-600 mb-2">100%</div>
                <div className="text-gray-600 font-sans">Гарантия качества</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-wadik text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 font-sans max-w-2xl mx-auto">
              Простой процесс от заявки до установки готового шкафа
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-wadik font-bold mx-auto mb-4">1</div>
              <h3 className="font-wadik text-lg font-bold mb-2 text-gray-900">Заявка</h3>
              <p className="text-gray-600 font-sans text-sm">Оставляете заявку по телефону или на сайте</p>
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-amber-200 -translate-x-8"></div>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-wadik font-bold mx-auto mb-4">2</div>
              <h3 className="font-wadik text-lg font-bold mb-2 text-gray-900">Замер</h3>
              <p className="text-gray-600 font-sans text-sm">Приезжаем к вам для точных измерений</p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-amber-200 -translate-x-8"></div>
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-wadik font-bold mx-auto mb-4">3</div>
              <h3 className="font-wadik text-lg font-bold mb-2 text-gray-900">Изготовление</h3>
              <p className="text-gray-600 font-sans text-sm">Производим шкаф на собственном производстве</p>
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-amber-200 -translate-x-8"></div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-wadik font-bold mx-auto mb-4">4</div>
              <h3 className="font-wadik text-lg font-bold mb-2 text-gray-900">Установка</h3>
              <p className="text-gray-600 font-sans text-sm">Доставляем и устанавливаем готовый шкаф</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-wadik text-4xl md:text-5xl font-bold mb-6">
            Готовы заказать шкаф мечты?
          </h2>
          <p className="text-xl mb-8 text-white/90 font-sans max-w-2xl mx-auto">
            Получите бесплатный расчет стоимости и консультацию дизайнера. 
            Замер и выезд специалиста — бесплатно!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-bold mb-2">Телефон</h3>
              <p className="text-white/90">+7 (495) 987-65-43</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-bold mb-2">Адрес</h3>
              <p className="text-white/90">г. Москва, ул. Мебельная, 15</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="font-wadik font-bold mb-2">Режим работы</h3>
              <p className="text-white/90">Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale bg-white text-amber-700 hover:bg-amber-50">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-amber-700 hover-scale">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>

          <p className="text-white/80 text-sm">
            Бесплатная консультация • Замер на дому • Гарантия качества
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-wadik text-2xl font-bold mb-4 text-amber-400">МебельПрофи</h3>
              <p className="text-gray-400 mb-4 font-sans text-sm">
                Качественные шкафы и системы хранения на заказ с 2009 года
              </p>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-wadik font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Шкафы-купе</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Угловые шкафы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гардеробные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Встроенные шкафы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wadik font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Изготовление на заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бесплатный замер</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантийное обслуживание</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-wadik font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 987-65-43</p>
                <p>info@mebelpro.ru</p>
                <p>г. Москва, ул. Мебельная, 15</p>
                <p>Пн-Вс: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 МебельПрофи. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;