function Panel({ title, children, subtitle }) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-[0_24px_60px_rgba(80,115,165,0.10)] ring-1 ring-[#5073A5]/10">
      <div className="mb-6">
        <div className="text-[22px] font-semibold tracking-[-0.02em] text-[#5073A5]">
          {title}
        </div>
        {subtitle ? (
          <div className="mt-2 text-sm text-slate-500">{subtitle}</div>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function StateLabel({ children }) {
  return (
    <div className="min-w-[110px] pt-3 text-sm font-medium tracking-[-0.01em] text-slate-500">
      {children}
    </div>
  );
}

function AlertIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#C96B5C]"
    >
      <path
        d="M8 5.333V8.333M8 10.667H8.007M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#4E8B68]"
    >
      <path
        d="M13.333 4.667L6.333 11.667L2.667 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#5073A5]/60"
    >
      <path
        d="M5 3.5H10.5L13 6V14.5H5V3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 3.5V6H13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7 8.5H11M7 11H11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#5073A5]/60"
    >
      <path
        d="M4 4.25H14V11.25H7.5L4 14V4.25Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 7.25H11.5M6.5 9.25H10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StateRow({ label, children }) {
  return (
    <div className="grid gap-4 border-t border-[#5073A5]/10 py-5 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[120px_1fr] md:items-start">
      <StateLabel>{label}</StateLabel>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

function TextareaField({
  label = "Label",
  placeholder = "Введите текст",
  value = "",
  hint = "",
  state = "default",
  leftIcon = null,
  required = false,
  readOnly = false,
  disabled = false,
  success = false,
  counter = null,
  rows = 4,
  width = "w-[420px]",
}) {
  const stateStyles = {
    default: "border-[#5073A5]/16 bg-white",
    hover: "border-[#5073A5]/28 bg-white",
    focus: "border-[#5073A5] bg-white shadow-[0_0_0_4px_rgba(80,115,165,0.12)]",
    filled: "border-[#5073A5]/18 bg-white",
    error:
      "border-[#C96B5C] bg-[#FFF8F6] shadow-[0_0_0_4px_rgba(201,107,92,0.10)]",
    success:
      "border-[#4E8B68] bg-[#FAFFFC] shadow-[0_0_0_4px_rgba(78,139,104,0.10)]",
    readonly: "border-[#5073A5]/12 bg-[#FAF8F1]",
    disabled: "border-[#5073A5]/10 bg-[#F3EEDD]",
  };

  const currentState = disabled
    ? "disabled"
    : readOnly
      ? "readonly"
      : success
        ? "success"
        : state;
  const minHeight =
    rows === 3
      ? "min-h-[104px]"
      : rows === 5
        ? "min-h-[152px]"
        : "min-h-[128px]";

  return (
    <div className={width}>
      <div className="mb-2 flex items-center gap-1 text-sm font-medium tracking-[-0.01em] text-slate-700">
        <span>{label}</span>
        {required ? <span className="text-[#C96B5C]">*</span> : null}
      </div>

      <div
        className={`rounded-2xl border px-4 py-3 transition ${stateStyles[currentState]} ${minHeight}`}
      >
        <div className="flex items-start gap-3">
          {leftIcon ? (
            <span className="mt-0.5 shrink-0">{leftIcon}</span>
          ) : null}
          <div className="min-w-0 flex-1">
            <div
              className={`whitespace-pre-line text-sm leading-6 ${disabled ? "text-slate-400" : value ? "text-slate-900" : "text-slate-400"}`}
            >
              {value || placeholder}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-start justify-between gap-3">
        <div
          className={`flex items-center gap-2 text-xs ${currentState === "error" ? "text-[#C96B5C]" : currentState === "success" ? "text-[#4E8B68]" : "text-slate-500"}`}
        >
          {hint ? (
            <>
              {currentState === "error" ? (
                <AlertIcon />
              ) : currentState === "success" ? (
                <CheckIcon />
              ) : null}
              <span>{hint}</span>
            </>
          ) : null}
        </div>
        {counter ? (
          <div className="shrink-0 text-xs text-slate-400">{counter}</div>
        ) : null}
      </div>
    </div>
  );
}

function TextareaMatrix({ title, fieldProps, values }) {
  return (
    <Panel
      title={title}
      subtitle="Для этого типа textarea показан полный одинаковый набор состояний"
    >
      <div className="rounded-[24px] bg-[#F8F5EA] p-6">
        <StateRow label="Default">
          <TextareaField {...fieldProps} placeholder={values.placeholder} />
        </StateRow>
        <StateRow label="Hover">
          <TextareaField
            {...fieldProps}
            placeholder={values.placeholder}
            state="hover"
          />
        </StateRow>
        <StateRow label="Focus">
          <TextareaField
            {...fieldProps}
            placeholder={values.placeholder}
            state="focus"
          />
        </StateRow>
        <StateRow label="Filled">
          <TextareaField
            {...fieldProps}
            value={values.filled}
            state="filled"
            counter={values.counter}
          />
        </StateRow>
        <StateRow label="Error">
          <TextareaField
            {...fieldProps}
            value={values.errorValue || values.filled}
            state="error"
            hint={values.errorHint}
            counter={values.errorCounter || values.counter}
          />
        </StateRow>
        <StateRow label="Success">
          <TextareaField
            {...fieldProps}
            value={values.successValue || values.filled}
            success
            hint={values.successHint}
            counter={values.successCounter || values.counter}
          />
        </StateRow>
        <StateRow label="Read-only">
          <TextareaField
            {...fieldProps}
            value={values.readonlyValue || values.filled}
            readOnly
            hint="Поле доступно только для просмотра"
            counter={values.counter}
          />
        </StateRow>
        <StateRow label="Disabled">
          <TextareaField
            {...fieldProps}
            value={values.disabledValue || values.filled}
            disabled
            counter={values.counter}
          />
        </StateRow>
      </div>
    </Panel>
  );
}

export default function TextareasLibraryPage() {
  return (
    <div className="min-h-screen bg-[#F0EBD7] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[36px] bg-[#5073A5] px-8 py-8 text-white shadow-[0_30px_80px_rgba(80,115,165,0.24)]">
          <div className="text-[32px] font-semibold tracking-[-0.03em]">
            Textareas
          </div>
          <div className="mt-2 text-sm text-white/80">
            Full state matrix for each key textarea type
          </div>
        </div>

        <div className="grid gap-8">
          <TextareaMatrix
            title="Comment textarea"
            fieldProps={{
              label: "Комментарий",
              required: true,
              leftIcon: <CommentIcon />,
            }}
            values={{
              placeholder: "Опишите ваш запрос или оставьте комментарий",
              filled:
                "Хотел бы уточнить наличие автомобиля в белом цвете и возможность записи на тест-драйв в выходные дни.",
              counter: "108 / 300",
              errorValue: "Нужен тест",
              errorHint: "Комментарий должен быть более подробным",
              errorCounter: "10 / 300",
              successHint: "Комментарий заполнен корректно",
            }}
          />

          <TextareaMatrix
            title="Service issue textarea"
            fieldProps={{
              label: "Описание проблемы",
              required: true,
              leftIcon: <NoteIcon />,
              rows: 5,
            }}
            values={{
              placeholder: "Опишите неисправность автомобиля",
              filled:
                "При движении на скорости свыше 60 км/ч появляется посторонний шум в передней части автомобиля. Также иногда загорается индикатор давления в шинах.",
              counter: "167 / 500",
              errorValue: "Шум",
              errorHint:
                "Опишите проблему подробнее для предварительной диагностики",
              errorCounter: "3 / 500",
              successHint: "Описание проблемы заполнено корректно",
            }}
          />

          <TextareaMatrix
            title="Trade-in note textarea"
            fieldProps={{
              label: "Состояние автомобиля",
              leftIcon: <CommentIcon />,
              rows: 3,
            }}
            values={{
              placeholder:
                "Укажите состояние кузова, салона и возможные особенности автомобиля",
              filled:
                "Автомобиль в хорошем состоянии, есть небольшая царапина на заднем бампере. Салон ухоженный, все ТО проходились вовремя.",
              counter: "129 / 400",
              errorValue: "Есть царапины",
              errorHint: "Добавьте больше деталей о состоянии автомобиля",
              errorCounter: "13 / 400",
              successHint: "Информация о состоянии заполнена корректно",
            }}
          />

          <Panel
            title="Additional cases"
            subtitle="Отдельные важные сценарии для textarea"
          >
            <div className="rounded-[24px] bg-[#F8F5EA] p-6">
              <StateRow label="Empty helper">
                <TextareaField
                  label="Дополнительная информация"
                  placeholder="Укажите любую дополнительную информацию"
                  hint="Поле можно не заполнять"
                  leftIcon={<CommentIcon />}
                />
              </StateRow>
              <StateRow label="Long text">
                <TextareaField
                  label="Подробное описание"
                  value="Автомобиль эксплуатировался преимущественно в городе. Последнее техническое обслуживание проводилось два месяца назад. Дополнительно установлена сигнализация и камера заднего вида. Имеется один косметический дефект на переднем крыле, который не влияет на эксплуатационные характеристики."
                  state="filled"
                  counter="298 / 500"
                  leftIcon={<NoteIcon />}
                  rows={5}
                  width="w-[520px]"
                />
              </StateRow>
              <StateRow label="Read-only value">
                <TextareaField
                  label="Комментарий менеджера"
                  value="Заявка принята в обработку. Клиенту предложено два доступных времени для тест-драйва."
                  readOnly
                  hint="Только для просмотра"
                  leftIcon={<NoteIcon />}
                />
              </StateRow>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
