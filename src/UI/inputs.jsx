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
    <div className="min-w-[96px] pt-3 text-sm font-medium tracking-[-0.01em] text-slate-500">
      {children}
    </div>
  );
}

function SearchIcon() {
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
        d="M12.75 12.75L16 16M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
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
        d="M2 4.5H16V13.5C16 14.0523 15.5523 14.5 15 14.5H3C2.44772 14.5 2 14.0523 2 13.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M2.5 5L9 9.75L15.5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
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
        d="M15 12.28V14.5C15 14.7761 14.7761 15 14.5 15C7.59644 15 2 9.40356 2 2.5C2 2.22386 2.22386 2 2.5 2H4.72C4.95867 2 5.16431 2.16847 5.21139 2.40245L5.68869 4.78033C5.72714 4.97172 5.65103 5.16831 5.49376 5.28534L4.22216 6.23169C5.06052 8.36125 6.63875 9.93948 8.76831 10.7778L9.71466 9.50624C9.83169 9.34897 10.0283 9.27286 10.2197 9.31131L12.5975 9.78861C12.8315 9.83569 13 10.0413 13 10.28V12.28Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#5073A5]/60"
    >
      <rect
        x="2"
        y="3"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5 7H13M5 10H10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#5073A5]/60"
    >
      <rect
        x="2.25"
        y="3.75"
        width="13.5"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 2.5V5M12.5 2.5V5M2.5 7H15.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
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

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-400"
    >
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon() {
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
        d="M1.75 9C2.94 5.9 5.65 4 9 4C12.35 4 15.06 5.9 16.25 9C15.06 12.1 12.35 14 9 14C5.65 14 2.94 12.1 1.75 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="9" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function StateRow({ label, children }) {
  return (
    <div className="grid gap-4 border-t border-[#5073A5]/10 py-5 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[110px_1fr] md:items-start">
      <StateLabel>{label}</StateLabel>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

function InputField({
  label = "Label",
  placeholder = "Введите значение",
  value = "",
  hint = "",
  state = "default",
  leftIcon = null,
  rightSlot = null,
  prefix = null,
  suffix = null,
  required = false,
  readOnly = false,
  disabled = false,
  success = false,
  width = "w-[320px]",
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
  const rightIcon =
    currentState === "error" ? (
      <AlertIcon />
    ) : currentState === "success" ? (
      <CheckIcon />
    ) : (
      rightSlot
    );

  return (
    <div className={width}>
      <div className="mb-2 flex items-center gap-1 text-sm font-medium tracking-[-0.01em] text-slate-700">
        <span>{label}</span>
        {required ? <span className="text-[#C96B5C]">*</span> : null}
      </div>
      <div
        className={`flex h-12 items-center gap-3 rounded-2xl border px-4 transition ${stateStyles[currentState]}`}
      >
        {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
        {prefix ? (
          <span className="shrink-0 text-sm text-slate-500">{prefix}</span>
        ) : null}
        <span
          className={`min-w-0 flex-1 truncate text-sm ${disabled ? "text-slate-400" : value ? "text-slate-900" : "text-slate-400"}`}
        >
          {value || placeholder}
        </span>
        {suffix ? (
          <span className="shrink-0 text-sm text-slate-500">{suffix}</span>
        ) : null}
        {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      </div>
      {hint ? (
        <div
          className={`mt-2 flex items-center gap-2 text-xs ${currentState === "error" ? "text-[#C96B5C]" : currentState === "success" ? "text-[#4E8B68]" : "text-slate-500"}`}
        >
          {currentState === "error" ? (
            <AlertIcon />
          ) : currentState === "success" ? (
            <CheckIcon />
          ) : null}
          <span>{hint}</span>
        </div>
      ) : null}
    </div>
  );
}

function FieldMatrix({ title, fieldProps, values }) {
  return (
    <Panel
      title={title}
      subtitle="Для этого типа поля показан полный одинаковый набор состояний"
    >
      <div className="rounded-[24px] bg-[#F8F5EA] p-6">
        <StateRow label="Default">
          <InputField {...fieldProps} placeholder={values.placeholder} />
        </StateRow>
        <StateRow label="Hover">
          <InputField
            {...fieldProps}
            placeholder={values.placeholder}
            state="hover"
          />
        </StateRow>
        <StateRow label="Focus">
          <InputField
            {...fieldProps}
            placeholder={values.placeholder}
            state="focus"
          />
        </StateRow>
        <StateRow label="Filled">
          <InputField {...fieldProps} value={values.filled} state="filled" />
        </StateRow>
        <StateRow label="Error">
          <InputField
            {...fieldProps}
            value={values.errorValue || values.filled}
            state="error"
            hint={values.errorHint}
          />
        </StateRow>
        <StateRow label="Success">
          <InputField
            {...fieldProps}
            value={values.successValue || values.filled}
            success
            hint={values.successHint}
          />
        </StateRow>
        <StateRow label="Read-only">
          <InputField
            {...fieldProps}
            value={values.readonlyValue || values.filled}
            readOnly
            hint="Поле доступно только для просмотра"
          />
        </StateRow>
        <StateRow label="Disabled">
          <InputField
            {...fieldProps}
            value={values.disabledValue || values.filled}
            disabled
          />
        </StateRow>
      </div>
    </Panel>
  );
}

export default function InputsLibraryPage() {
  return (
    <div className="min-h-screen bg-[#F0EBD7] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[36px] bg-[#5073A5] px-8 py-8 text-white shadow-[0_30px_80px_rgba(80,115,165,0.24)]">
          <div className="text-[32px] font-semibold tracking-[-0.03em]">
            Inputs
          </div>
          <div className="mt-2 text-sm text-white/80">
            Full state matrix for each key field type
          </div>
        </div>

        <div className="grid gap-8">
          <FieldMatrix
            title="Phone field"
            fieldProps={{
              label: "Телефон",
              required: true,
              leftIcon: <PhoneIcon />,
            }}
            values={{
              placeholder: "+7 (___) ___-__-__",
              filled: "+7 (999) 123-45-67",
              errorValue: "+7 (999)",
              errorHint: "Введите номер полностью",
              successHint: "Поле заполнено корректно",
            }}
          />

          <FieldMatrix
            title="Email field"
            fieldProps={{
              label: "Email",
              required: true,
              leftIcon: <MailIcon />,
            }}
            values={{
              placeholder: "example@mail.ru",
              filled: "client@example.ru",
              errorValue: "client@",
              errorHint: "Некорректный формат email",
              successHint: "Email указан корректно",
            }}
          />

          <FieldMatrix
            title="Search field"
            fieldProps={{
              label: "Поиск автомобиля",
              leftIcon: <SearchIcon />,
              rightSlot: <CloseIcon />,
            }}
            values={{
              placeholder: "Введите марку или модель",
              filled: "Toyota Camry",
              errorValue: "***",
              errorHint: "Поисковый запрос не распознан",
              successHint: "Найдено несколько совпадений",
            }}
          />

          <FieldMatrix
            title="Date field"
            fieldProps={{
              label: "Дата тест-драйва",
              leftIcon: <CalendarIcon />,
              rightSlot: <CalendarIcon />,
            }}
            values={{
              placeholder: "Выберите дату",
              filled: "15.04.2026",
              errorValue: "32.15.2026",
              errorHint: "Введите корректную дату",
              successHint: "Дата выбрана корректно",
            }}
          />

          <FieldMatrix
            title="VIN field"
            fieldProps={{ label: "VIN", leftIcon: <VinIcon /> }}
            values={{
              placeholder: "Введите VIN",
              filled: "XTA210990Y1234567",
              errorValue: "XTA21",
              errorHint: "VIN должен содержать 17 символов",
              successHint: "VIN успешно распознан",
            }}
          />

          <FieldMatrix
            title="Price field"
            fieldProps={{ label: "Цена автомобиля", prefix: "₽" }}
            values={{
              placeholder: "Введите стоимость",
              filled: "3 450 000",
              errorValue: "-1000",
              errorHint: "Стоимость должна быть положительной",
              successHint: "Стоимость указана корректно",
            }}
          />

          <FieldMatrix
            title="Mileage field"
            fieldProps={{ label: "Пробег", suffix: "км" }}
            values={{
              placeholder: "Введите пробег",
              filled: "68 000",
              errorValue: "-200",
              errorHint: "Пробег не может быть отрицательным",
              successHint: "Пробег указан корректно",
            }}
          />

          <FieldMatrix
            title="Password field"
            fieldProps={{
              label: "Пароль",
              leftIcon: <EyeIcon />,
              rightSlot: <EyeIcon />,
            }}
            values={{
              placeholder: "Введите пароль",
              filled: "••••••••••",
              errorValue: "•••",
              errorHint: "Пароль слишком короткий",
              successHint: "Пароль соответствует требованиям",
            }}
          />
        </div>
      </div>
    </div>
  );
}
