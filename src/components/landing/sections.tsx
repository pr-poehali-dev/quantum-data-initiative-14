import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const orange = "text-[#FF0000]"
const card = "bg-white/5 border border-white/10 rounded-xl p-5"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/60 text-sm font-normal tracking-widest uppercase mb-2">Коммерческое предложение · PROFITCLUB · ПГТ Мостовской</Badge>,
    title: "Системный маркетинг для фитнес-клуба PROFIT.",
    content: (
      <div className="space-y-6">
        <p className="text-lg md:text-xl text-neutral-300 max-w-3xl">
          Уважаемый владелец/управляющий! Изучив текущее положение клуба PROFIT — <span className={orange}>250 активных абонементов</span> при населении района <span className={orange}>60 000+ человек</span> — я вижу огромный потенциал для роста.
        </p>
        <p className="text-lg text-neutral-400 max-w-2xl">
          Основная проблема не в качестве услуг. Проблема — в отсутствии системного маркетинга. Я предлагаю взять это на себя.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <div className={`${card} flex items-center gap-3`}>
            <span className={`text-2xl font-bold ${orange}`}>20 000 ₽</span>
            <span className="text-neutral-400 text-sm">/ в месяц</span>
          </div>
          <div className={`${card} flex items-center gap-3`}>
            <span className={`text-2xl font-bold ${orange}`}>4</span>
            <span className="text-neutral-400 text-sm">направления работы</span>
          </div>
          <div className={`${card} flex items-center gap-3`}>
            <span className={`text-2xl font-bold ${orange}`}>+10–15%</span>
            <span className="text-neutral-400 text-sm">рост базы за 3–4 мес.</span>
          </div>
        </div>
      </div>
    ),
    showButton: true,
    buttonText: 'Обсудить сотрудничество'
  },
  {
    id: 'problem',
    title: 'Вижу огромный потенциал.',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-neutral-300 max-w-3xl">
          Клуб работает не на полную мощность. При населении района <span className={orange}>60 000+ человек</span> активная база составляет лишь <span className={orange}>250 абонементов</span> — это менее 0,5% потенциального рынка.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          <div className={card}>
            <div className={`text-3xl font-bold ${orange} mb-1`}>60К+</div>
            <div className="text-neutral-400 text-sm">жителей в районе</div>
          </div>
          <div className={card}>
            <div className={`text-3xl font-bold ${orange} mb-1`}>250</div>
            <div className="text-neutral-400 text-sm">активных абонементов</div>
          </div>
          <div className={card}>
            <div className="text-3xl font-bold text-green-400 mb-1">300+</div>
            <div className="text-neutral-400 text-sm">цель через 3–4 мес.</div>
          </div>
          <div className={card}>
            <div className="text-3xl font-bold text-green-400 mb-1">40К</div>
            <div className="text-neutral-400 text-sm">охват пабликов ВК</div>
          </div>
        </div>
        <p className="text-neutral-400 text-base max-w-2xl">
          Проблема решается системной работой — воронкой, контентом, возвратом ушедших и регулярными акциями.
        </p>
        <img
          src="https://cdn.poehali.dev/projects/7289ee43-edf0-4306-b118-656567a7baa2/files/649077cd-7cae-4891-b3d8-07588b6f4b27.jpg"
          alt="Рост базы"
          className="w-full max-w-sm rounded-xl opacity-80 object-cover h-36"
        />
      </div>
    ),
  },
  {
    id: 'direction1',
    title: '1. Цифровая инфраструктура и онлайн-продажи.',
    content: (
      <div className="space-y-5">
        <p className="text-neutral-400 text-base">Воронка ВКонтакте под ключ — от первого касания до покупки абонемента.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className={card}>
            <Icon name="Settings" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-1">Аудит и настройка сообщества</div>
            <div className="text-neutral-400 text-sm">Приведение группы PROFIT к единому стилю. Создание удобного меню и виджетов для навигации.</div>
          </div>
          <div className={card}>
            <Icon name="ShoppingCart" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-1">Магазин ВКонтакте</div>
            <div className="text-neutral-400 text-sm">Абонементы как товары с ценами и описанием. Быстрый заказ — звонок или переход в Директ.</div>
          </div>
          <div className={card}>
            <Icon name="MousePointerClick" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-1">Виджеты записи</div>
            <div className="text-neutral-400 text-sm">Кнопки «Записаться на пробную тренировку» и «Купить абонемент» прямо в шапке профиля и меню сообщества.</div>
          </div>
        </div>
        <img
          src="https://cdn.poehali.dev/projects/7289ee43-edf0-4306-b118-656567a7baa2/files/09ef46c2-1488-4484-9d72-a1102720bda1.jpg"
          alt="Воронка продаж"
          className="w-full max-w-md rounded-xl opacity-75 object-cover h-40"
        />
      </div>
    ),
  },
  {
    id: 'direction2',
    title: '2. Производство контента и дизайн.',
    content: (
      <div className="space-y-5">
        <p className="text-neutral-400 text-base max-w-3xl">Весь визуал для онлайна и офлайна — от поста до плаката в зал.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <div className={card}>
            <Icon name="Image" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Макеты для соцсетей</div>
            <div className="text-neutral-400 text-sm">Посты, сторис, рекламные объявления — в едином фирменном стиле PROFIT.</div>
          </div>
          <div className={card}>
            <Icon name="Printer" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Полиграфия и офлайн</div>
            <div className="text-neutral-400 text-sm">Листовки, флаеры, плакаты в зал (на стойку, на двери), принты для формы по запросу.</div>
          </div>
          <div className={card}>
            <Icon name="FileText" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Контент-план и тексты</div>
            <div className="text-neutral-400 text-sm">Составление плана публикаций, написание текстов, обработка фото из зала.</div>
          </div>
          <div className={card}>
            <Icon name="Camera" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Съёмка контента</div>
            <div className="text-neutral-400 text-sm">Постановка фото и видео, обработка материалов, публикация по расписанию.</div>
          </div>
        </div>
        <img
          src="https://cdn.poehali.dev/projects/7289ee43-edf0-4306-b118-656567a7baa2/files/1323fcc7-0519-4d33-9432-52c00cab6c6e.jpg"
          alt="Контент и дизайн"
          className="w-full max-w-sm rounded-xl opacity-75 object-cover h-36"
        />
      </div>
    ),
  },
  {
    id: 'direction3',
    title: '3. Управление клиентской базой (CRM).',
    content: (
      <div className="space-y-5">
        <p className={`text-base font-semibold ${orange}`}>Самая важная часть — даёт быстрые деньги без больших затрат на рекламу.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className={card}>
            <Icon name="Users" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Сегментация базы</div>
            <div className="text-neutral-400 text-sm">Анализ текущих посетителей. Разбивка на активных, спящих и ушедших клиентов.</div>
          </div>
          <div className={card}>
            <Icon name="UserCheck" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Возврат ушедших</div>
            <div className="text-neutral-400 text-sm">Серия рассылок для тех, кто купил но перестал ходить, и для тех, у кого закончился абонемент. Цель — вернуть в зал.</div>
          </div>
          <div className={card}>
            <Icon name="Bell" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Автоматизация</div>
            <div className="text-neutral-400 text-sm">Напоминания о тренировках, днях рождения, окончании срока действия абонемента.</div>
          </div>
        </div>
        <div className={`${card} max-w-3xl`}>
          <div className="flex items-start gap-3">
            <Icon name="TrendingUp" size={20} className="text-green-400 mt-0.5 shrink-0" />
            <div>
              <div className="text-white font-semibold mb-1">Ожидаемый результат</div>
              <div className="text-neutral-400 text-sm">Охват базы до 500 бывших клиентов рассылками. Минимальная конверсия — 3–5% = <span className="text-green-400 font-semibold">10–15 человек обратно в зал</span>.</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'direction4',
    title: '4. Стратегия привлечения новых клиентов.',
    content: (
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div className={card}>
            <Icon name="Megaphone" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Местные паблики ВКонтакте</div>
            <div className="text-neutral-400 text-sm">Еженедельный мониторинг площадок с совокупным охватом <span className="text-white font-medium">40 000 чел.</span> Цена поста 1–2 тыс. руб. Подготовка цепляющих офферов и макетов специально под посев в этих группах.</div>
          </div>
          <div className={card}>
            <Icon name="Zap" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Ежемесячные акции</div>
            <div className="text-neutral-400 text-sm">1–2 акции в месяц. Для удержания: «Приведи друга», скидка на годовой абонемент, заморозка без потери срока. Ежемесячная генерация и внедрение новых механик.</div>
          </div>
          <div className={card}>
            <Icon name="ArrowUp" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Апсейл — рост среднего чека</div>
            <div className="text-neutral-400 text-sm">ВИП-абонементы (полотенце, солярий, персональный шкафчик), допуслуги (массаж, СПА), продажа спортпита и товаров на ресепшн.</div>
          </div>
          <div className={card}>
            <Icon name="Target" size={20} className={`${orange} mb-3`} />
            <div className="text-white font-semibold mb-2">Ретаргетинг «тёплой» базы</div>
            <div className="text-neutral-400 text-sm">Работа с подписчиками и участниками конкурсов, которые уже знают о клубе, но ещё не купили. Спецпредложения специально для них.</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'kpi',
    title: 'KPI и гарантии результата.',
    content: (
      <div className="space-y-5">
        <p className="text-neutral-400 text-base max-w-3xl">Я не обещаю 1000 клиентов завтра — я гарантирую системный подход и прозрачную отчётность. Исходя из опыта работы в подобных нишах и анализа статистики пабликов (охват 4–5 тыс. за пост), беру на себя следующие KPI:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div className={`${card} border-green-500/30`}>
            <div className="text-2xl font-bold text-green-400 mb-1">+10–15%</div>
            <div className="text-white font-semibold mb-1">Рост активной базы</div>
            <div className="text-neutral-400 text-sm">Увеличение количества активных абонементов за первые 3–4 месяца за счёт работы с отказниками и привлечения новых клиентов.</div>
          </div>
          <div className={`${card} border-green-500/30`}>
            <div className="text-2xl font-bold text-green-400 mb-1">10–15 чел.</div>
            <div className="text-white font-semibold mb-1">Возврат спящих клиентов</div>
            <div className="text-neutral-400 text-sm">Охват базы до 500 бывших клиентов рассылками. Минимальная конверсия в возврат — 3–5%.</div>
          </div>
          <div className={`${card} border-orange-500/30`}>
            <div className={`text-2xl font-bold ${orange} mb-1`}>×2–3</div>
            <div className="text-white font-semibold mb-1">Рентабельность рекламы (ROMI)</div>
            <div className="text-neutral-400 text-sm">При вложениях 1–2 тыс. руб./пост — стоимость привлечённого клиента в 2–3 раза ниже стоимости абонемента.</div>
          </div>
          <div className={`${card} border-orange-500/30`}>
            <div className={`text-2xl font-bold ${orange} mb-1`}>1×/мес.</div>
            <div className="text-white font-semibold mb-1">Ежемесячная отчётность</div>
            <div className="text-neutral-400 text-sm">Что сделано, сколько опубликовано материалов, какие акции запущены, сколько заявок и сообщений получено.</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'value',
    title: 'Штатный маркетолог за 20 000 ₽/мес.',
    content: (
      <div className="space-y-5">
        <p className="text-neutral-400 text-base max-w-3xl">За 20 000 рублей в месяц вы получаете не «мальчика для постинга», а готовую систему, нацеленную на цифры.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
          <div className={card}>
            <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Дизайнер</div>
            <div className="text-white font-bold text-xl">2–5 тыс. ₽</div>
            <div className="text-neutral-400 text-sm">за каждый макет</div>
          </div>
          <div className={card}>
            <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Копирайтер</div>
            <div className="text-white font-bold text-xl">1–2 тыс. ₽</div>
            <div className="text-neutral-400 text-sm">за каждый пост</div>
          </div>
          <div className={card}>
            <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">Штатный маркетолог</div>
            <div className="text-white font-bold text-xl">от 40 тыс. ₽</div>
            <div className="text-neutral-400 text-sm">в месяц</div>
          </div>
        </div>
        <div className={`${card} max-w-4xl border-[#FF0000]/40 bg-[#FF0000]/5`}>
          <div className="flex items-center gap-3 mb-4">
            <Icon name="CheckCircle" size={22} className="text-[#FF0000]" />
            <div className="text-white font-bold text-lg">Всё в одном лице за 20 000 ₽/мес.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-start gap-2">
              <Icon name="Clock" size={16} className="text-[#FF0000] mt-0.5 shrink-0" />
              <div className="text-neutral-300 text-sm">Вы не думаете, что выложить завтра — я готовлю контент и стратегию</div>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="Wallet" size={16} className="text-[#FF0000] mt-0.5 shrink-0" />
              <div className="text-neutral-300 text-sm">Не нужно платить отдельно дизайнеру, копирайтеру и маркетологу</div>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="BarChart2" size={16} className="text-[#FF0000] mt-0.5 shrink-0" />
              <div className="text-neutral-300 text-sm">Системность — будем точно знать, какая акция сработала, а какая нет</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'cta',
    title: 'Готов начать прямо сейчас.',
    content: (
      <div className="space-y-6">
        <p className="text-neutral-300 text-lg max-w-2xl">Для старта нужны всего 4 вещи — остальное я беру на себя:</p>
        <div className="space-y-3 max-w-xl">
          {[
            'Доступ в действующее сообщество ВКонтакте (если есть)',
            'База клиентов — номера телефонов активных и бывших клиентов',
            'Понимание маржинальности абонементов (чтобы знать, какие скидки можно давать)',
            'Ваше желание развиваться и выходить на новый уровень',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full bg-[#FF0000] flex items-center justify-center text-black font-bold text-sm shrink-0`}>{i + 1}</div>
              <div className="text-neutral-300">{item}</div>
            </div>
          ))}
        </div>
        <p className="text-neutral-400 text-base max-w-xl">30 минут созвона — и мы начинаем работу.</p>
      </div>
    ),
    showButton: true,
    buttonText: 'Связаться со мной'
  },
]