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

function CarIcon() {
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
        d="M4 11.5L5.2 8.3C5.42 7.72 5.98 7.33 6.6 7.33H11.4C12.02 7.33 12.58 7.72 12.8 8.3L14 11.5M4.5 11.5H13.5C14.05 11.5 14.5 11.95 14.5 12.5V13C14.5 13.55 14.05 14 13.5 14H13V14.5C13 14.78 12.78 15 12.5 15H11.5C11.22 15 11 14.78 11 14.5V14H7V14.5C7 14.78 6.78 15 6.5 15H5.5C5.22 15 5 14.78 5 14.5V14H4.5C3.95 14 3.5 13.55 3.5 13V12.5C3.5 11.95 3.95 11.5 4.5 11.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5.75" cy="12.75" r="0.75" fill="currentColor" />
      <circle cx="12.25" cy="12.75" r="0.75" fill="currentColor" />
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

function FilterIcon() {
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
        d="M3 4.5H15M5.5 9H12.5M7.5 13.5H10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

function ChevronDownIcon({ open = false }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#5073A5]/55 transition ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6.5L8 10L12 6.5"
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

function Tag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#5073A5]/8 px-3 py-1 text-xs font-medium text-[#5073A5] ring-1 ring-[#5073A5]/10">
      {children}
      <CloseIcon />
    </span>
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

function SelectField({
  label = "Label",
  placeholder = "Выберите значение",
  value = "",
  hint = "",
  state = "default",
  leftIcon = null,
  rightSlot = null,
  required = false,
  readOnly = false,
  disabled = false,
  success = false,
  open = false,
  width = "w-[320px]",
  tags = null,
  options = [],
  compactTags = false,
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
  const trailing =
    currentState === "error" ? (
      <AlertIcon />
    ) : currentState === "success" ? (
      <CheckIcon />
    ) : (
      rightSlot || <ChevronDownIcon open={open} />
    );

  return (
    <div className={width}>
      <div className="mb-2 flex items-center gap-1 text-sm font-medium tracking-[-0.01em] text-slate-700">
        <span>{label}</span>
        {required ? <span className="text-[#C96B5C]">*</span> : null}
      </div>
      <div
        className={`min-h-12 rounded-2xl border px-4 transition ${stateStyles[currentState]}`}
      >
        <div
          className={`flex gap-3 ${tags ? "min-h-12 items-start py-3" : "h-12 items-center"}`}
        >
          {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
          <div className="min-w-0 flex-1">
            {tags ? (
              <div
                className={`flex min-w-0 flex-wrap gap-2 ${compactTags ? "max-w-[220px]" : ""}`}
              >
                {tags}
              </div>
            ) : (
              <span
                className={`block truncate text-sm ${disabled ? "text-slate-400" : value ? "text-slate-900" : "text-slate-400"}`}
              >
                {value || placeholder}
              </span>
            )}
          </div>
          <span className="shrink-0">{trailing}</span>
        </div>

        {open ? (
          <div className="border-t border-[#5073A5]/10 py-2">
            {options.map((option, index) => {
              const isSelected = option === (value || placeholder);
              return (
                <div
                  key={`${option}-${index}`}
                  className={
                    isSelected
                      ? "rounded-xl bg-[#5073A5]/8 px-3 py-2 text-sm font-medium text-[#5073A5]"
                      : "rounded-xl px-3 py-2 text-sm text-slate-900 hover:bg-[#5073A5]/6"
                  }
                >
                  {option}
                </div>
              );
            })}
          </div>
        ) : null}
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

function SelectMatrix({ title, fieldProps, values }) {
  return (
    <Panel
      title={title}
      subtitle="Для этого типа select показан полный одинаковый набор состояний"
    >
      <div className="rounded-[24px] bg-[#F8F5EA] p-6">
        <StateRow label="Default">
          <SelectField {...fieldProps} placeholder={values.placeholder} />
        </StateRow>
        <StateRow label="Hover">
          <SelectField
            {...fieldProps}
            placeholder={values.placeholder}
            state="hover"
          />
        </StateRow>
        <StateRow label="Focus">
          <SelectField
            {...fieldProps}
            placeholder={values.placeholder}
            state="focus"
          />
        </StateRow>
        <StateRow label="Open">
          <SelectField
            {...fieldProps}
            value={values.openValue || values.filled}
            state="focus"
            open
            options={values.options || []}
          />
        </StateRow>
        <StateRow label="Filled">
          <SelectField {...fieldProps} value={values.filled} state="filled" />
        </StateRow>
        <StateRow label="Error">
          <SelectField
            {...fieldProps}
            value={values.errorValue || values.filled}
            state="error"
            hint={values.errorHint}
          />
        </StateRow>
        <StateRow label="Success">
          <SelectField
            {...fieldProps}
            value={values.successValue || values.filled}
            success
            hint={values.successHint}
          />
        </StateRow>
        <StateRow label="Read-only">
          <SelectField
            {...fieldProps}
            value={values.readonlyValue || values.filled}
            readOnly
            hint="Поле доступно только для просмотра"
          />
        </StateRow>
        <StateRow label="Disabled">
          <SelectField
            {...fieldProps}
            value={values.disabledValue || values.filled}
            disabled
          />
        </StateRow>
      </div>
    </Panel>
  );
}

export default function SelectsLibraryPage() {
  return (
    <div className="min-h-screen bg-[#F0EBD7] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[36px] bg-[#5073A5] px-8 py-8 text-white shadow-[0_30px_80px_rgba(80,115,165,0.24)]">
          <div className="text-[32px] font-semibold tracking-[-0.03em]">
            Selects
          </div>
          <div className="mt-2 text-sm text-white/80">
            Full state matrix for each key select type
          </div>
        </div>

        <div className="grid gap-8">
          <SelectMatrix
            title="Brand select"
            fieldProps={{
              label: "Марка",
              required: true,
              leftIcon: <CarIcon />,
            }}
            values={{
              placeholder: "Выберите марку",
              filled: "Hyundai",
              options: ["Toyota", "Hyundai", "Kia", "Volkswagen", "Skoda"],
              errorHint: "Выберите марку автомобиля",
              successHint: "Марка выбрана корректно",
            }}
          />

          <SelectMatrix
            title="Model select"
            fieldProps={{
              label: "Модель",
              required: true,
              leftIcon: <CarIcon />,
            }}
            values={{
              placeholder: "Выберите модель",
              filled: "Tucson",
              options: ["Tucson", "Santa Fe", "Creta", "Elantra"],
              errorHint: "Выберите модель автомобиля",
              successHint: "Модель выбрана корректно",
            }}
          />

          <SelectMatrix
            title="Date select"
            fieldProps={{
              label: "Дата тест-драйва",
              leftIcon: <CalendarIcon />,
            }}
            values={{
              placeholder: "Выберите дату",
              filled: "15.04.2026",
              options: ["15.04.2026", "16.04.2026", "17.04.2026", "18.04.2026"],
              errorValue: "Дата не выбрана",
              errorHint: "Необходимо выбрать дату",
              successHint: "Дата выбрана корректно",
            }}
          />

          <SelectMatrix
            title="Filter select"
            fieldProps={{ label: "Тип кузова", leftIcon: <FilterIcon /> }}
            values={{
              placeholder: "Выберите тип кузова",
              filled: "Кроссовер",
              options: [
                "Седан",
                "Хэтчбек",
                "Универсал",
                "Кроссовер",
                "Внедорожник",
              ],
              errorHint: "Выберите хотя бы один фильтр",
              successHint: "Фильтр применен",
            }}
          />

          <Panel
            title="Multi-select"
            subtitle="Отдельный случай для фильтров с несколькими выбранными значениями"
          >
            <div className="rounded-[24px] bg-[#F8F5EA] p-6">
              <StateRow label="Default">
                <SelectField
                  label="Комплектация"
                  placeholder="Выберите комплектации"
                  leftIcon={<FilterIcon />}
                />
              </StateRow>
              <StateRow label="Open">
                <SelectField
                  label="Комплектация"
                  leftIcon={<FilterIcon />}
                  tags={[<Tag key="1">Comfort</Tag>, <Tag key="2">Style</Tag>]}
                  open
                  state="focus"
                  options={["Comfort", "Style", "Prestige", "Premium"]}
                />
              </StateRow>
              <StateRow label="Filled">
                <SelectField
                  label="Комплектация"
                  leftIcon={<FilterIcon />}
                  tags={[
                    <Tag key="1">Comfort</Tag>,
                    <Tag key="2">Style</Tag>,
                    <Tag key="3">+1</Tag>,
                  ]}
                  state="filled"
                  compactTags
                />
              </StateRow>
              <StateRow label="Error">
                <SelectField
                  label="Комплектация"
                  leftIcon={<FilterIcon />}
                  state="error"
                  hint="Выберите хотя бы одну комплектацию"
                />
              </StateRow>
              <StateRow label="Disabled">
                <SelectField
                  label="Комплектация"
                  leftIcon={<FilterIcon />}
                  tags={[<Tag key="1">Comfort</Tag>]}
                  disabled
                  compactTags
                />
              </StateRow>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
