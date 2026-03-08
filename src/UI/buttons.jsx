function Panel({ title, children }) {
  return (
    <section className="rounded-[32px] bg-white p-8 shadow-[0_24px_60px_rgba(80,115,165,0.10)] ring-1 ring-[#5073A5]/10">
      <div className="mb-6 text-[22px] font-semibold tracking-[-0.02em] text-[#5073A5]">{title}</div>
      {children}
    </section>
  );
}

function StateLabel({ children }) {
  return (
    <div className="min-w-[88px] text-sm font-medium tracking-[-0.01em] text-slate-500">
      {children}
    </div>
  );
}

function Spinner({ blue = false }) {
  return (
    <span
      className={
        blue
          ? "h-4 w-4 animate-spin rounded-full border-2 border-[#5073A5]/25 border-t-[#5073A5]"
          : "h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white"
      }
    />
  );
}

function PlusIcon({ blue = false }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={blue ? "text-[#5073A5]" : "text-white"}
    >
      <path
        d="M8 3.333V12.667M3.333 8H12.667"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StateRow({ label, children }) {
  return (
    <div className="grid gap-4 border-t border-[#5073A5]/10 py-5 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[96px_1fr] md:items-center">
      <StateLabel>{label}</StateLabel>
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

function PrimaryButton({ children, state = "default", icon = false, iconOnly = false }) {
  const styles = {
    default: "bg-[#5073A5] text-white shadow-[0_12px_24px_rgba(80,115,165,0.20)]",
    hover: "bg-[#456894] text-white shadow-[0_14px_28px_rgba(80,115,165,0.22)]",
    active: "bg-[#3E5E87] text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.10)]",
    disabled: "bg-[#5073A5]/40 text-white/75",
    loading: "bg-[#5073A5] text-white shadow-[0_12px_24px_rgba(80,115,165,0.20)]",
  };

  return (
    <button
      disabled={state === "disabled"}
      className={`inline-flex h-12 ${iconOnly ? "w-12 px-0" : "min-w-[148px] px-6"} items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-[-0.01em] transition ${styles[state]}`}
    >
      {state === "loading" ? <Spinner /> : icon ? <PlusIcon /> : null}
      {!iconOnly && children}
      {iconOnly && state !== "loading" && <PlusIcon />}
    </button>
  );
}

function SecondaryButton({ children, state = "default", icon = false, iconOnly = false }) {
  const styles = {
    default: "bg-[#F3EEDD] text-[#5073A5] ring-1 ring-[#5073A5]/10",
    hover: "bg-[#ECE5D2] text-[#5073A5] ring-1 ring-[#5073A5]/10",
    active: "bg-[#E2D9C3] text-[#5073A5] ring-1 ring-[#5073A5]/10",
    disabled: "bg-[#F3EEDD]/75 text-[#5073A5]/45 ring-1 ring-[#5073A5]/8",
    loading: "bg-[#F3EEDD] text-[#5073A5] ring-1 ring-[#5073A5]/10",
  };

  return (
    <button
      disabled={state === "disabled"}
      className={`inline-flex h-12 ${iconOnly ? "w-12 px-0" : "min-w-[148px] px-6"} items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-[-0.01em] transition ${styles[state]}`}
    >
      {state === "loading" ? <Spinner blue /> : icon ? <PlusIcon blue /> : null}
      {!iconOnly && children}
      {iconOnly && state !== "loading" && <PlusIcon blue />}
    </button>
  );
}

function OutlineButton({ children, state = "default", icon = false, iconOnly = false }) {
  const styles = {
    default: "border border-[#5073A5]/24 bg-transparent text-[#5073A5]",
    hover: "border border-[#5073A5]/32 bg-white/55 text-[#5073A5]",
    active: "border border-[#5073A5]/38 bg-[#5073A5]/8 text-[#5073A5]",
    disabled: "border border-[#5073A5]/12 bg-transparent text-[#5073A5]/35",
    loading: "border border-[#5073A5]/24 bg-transparent text-[#5073A5]",
  };

  return (
    <button
      disabled={state === "disabled"}
      className={`inline-flex h-12 ${iconOnly ? "w-12 px-0" : "min-w-[148px] px-6"} items-center justify-center gap-2 rounded-2xl text-sm font-semibold tracking-[-0.01em] transition ${styles[state]}`}
    >
      {state === "loading" ? <Spinner blue /> : icon ? <PlusIcon blue /> : null}
      {!iconOnly && children}
      {iconOnly && state !== "loading" && <PlusIcon blue />}
    </button>
  );
}

export default function ButtonsLibraryPage() {
  return (
    <div className="min-h-screen bg-[#F0EBD7] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[36px] bg-[#5073A5] px-8 py-8 text-white shadow-[0_30px_80px_rgba(80,115,165,0.24)]">
          <div className="text-[32px] font-semibold tracking-[-0.03em]">Buttons</div>
          <div className="mt-2 text-sm text-white/80">Brand palette: #5073A5 / #F0EBD7</div>
        </div>

        <div className="grid gap-8">
          <Panel title="Primary">
            <div className="rounded-[24px] bg-[#F8F5EA] p-6">
              <StateRow label="Default">
                <PrimaryButton state="default">Button</PrimaryButton>
                <PrimaryButton state="default" icon>Button</PrimaryButton>
                <PrimaryButton state="default" iconOnly />
              </StateRow>
              <StateRow label="Hover">
                <PrimaryButton state="hover">Button</PrimaryButton>
                <PrimaryButton state="hover" icon>Button</PrimaryButton>
                <PrimaryButton state="hover" iconOnly />
              </StateRow>
              <StateRow label="Active">
                <PrimaryButton state="active">Button</PrimaryButton>
                <PrimaryButton state="active" icon>Button</PrimaryButton>
                <PrimaryButton state="active" iconOnly />
              </StateRow>
              <StateRow label="Disabled">
                <PrimaryButton state="disabled">Button</PrimaryButton>
                <PrimaryButton state="disabled" icon>Button</PrimaryButton>
                <PrimaryButton state="disabled" iconOnly />
              </StateRow>
              <StateRow label="Loading">
                <PrimaryButton state="loading">Button</PrimaryButton>
                <PrimaryButton state="loading" icon>Button</PrimaryButton>
                <PrimaryButton state="loading" iconOnly />
              </StateRow>
            </div>
          </Panel>

          <Panel title="Secondary">
            <div className="rounded-[24px] bg-[#F8F5EA] p-6">
              <StateRow label="Default">
                <SecondaryButton state="default">Button</SecondaryButton>
                <SecondaryButton state="default" icon>Button</SecondaryButton>
                <SecondaryButton state="default" iconOnly />
              </StateRow>
              <StateRow label="Hover">
                <SecondaryButton state="hover">Button</SecondaryButton>
                <SecondaryButton state="hover" icon>Button</SecondaryButton>
                <SecondaryButton state="hover" iconOnly />
              </StateRow>
              <StateRow label="Active">
                <SecondaryButton state="active">Button</SecondaryButton>
                <SecondaryButton state="active" icon>Button</SecondaryButton>
                <SecondaryButton state="active" iconOnly />
              </StateRow>
              <StateRow label="Disabled">
                <SecondaryButton state="disabled">Button</SecondaryButton>
                <SecondaryButton state="disabled" icon>Button</SecondaryButton>
                <SecondaryButton state="disabled" iconOnly />
              </StateRow>
              <StateRow label="Loading">
                <SecondaryButton state="loading">Button</SecondaryButton>
                <SecondaryButton state="loading" icon>Button</SecondaryButton>
                <SecondaryButton state="loading" iconOnly />
              </StateRow>
            </div>
          </Panel>

          <Panel title="Outline">
            <div className="rounded-[24px] bg-[#F8F5EA] p-6">
              <StateRow label="Default">
                <OutlineButton state="default">Button</OutlineButton>
                <OutlineButton state="default" icon>Button</OutlineButton>
                <OutlineButton state="default" iconOnly />
              </StateRow>
              <StateRow label="Hover">
                <OutlineButton state="hover">Button</OutlineButton>
                <OutlineButton state="hover" icon>Button</OutlineButton>
                <OutlineButton state="hover" iconOnly />
              </StateRow>
              <StateRow label="Active">
                <OutlineButton state="active">Button</OutlineButton>
                <OutlineButton state="active" icon>Button</OutlineButton>
                <OutlineButton state="active" iconOnly />
              </StateRow>
              <StateRow label="Disabled">
                <OutlineButton state="disabled">Button</OutlineButton>
                <OutlineButton state="disabled" icon>Button</OutlineButton>
                <OutlineButton state="disabled" iconOnly />
              </StateRow>
              <StateRow label="Loading">
                <OutlineButton state="loading">Button</OutlineButton>
                <OutlineButton state="loading" icon>Button</OutlineButton>
                <OutlineButton state="loading" iconOnly />
              </StateRow>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
