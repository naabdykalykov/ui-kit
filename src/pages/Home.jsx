import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0EBD7] flex items-center justify-center gap-8">
      <Link
        to="/buttons"
        className="text-[22px] font-semibold text-[#5073A5] hover:text-[#456894] transition"
      >
        Кнопки
      </Link>
      <Link
        to="/inputs"
        className="text-[22px] font-semibold text-[#5073A5] hover:text-[#456894] transition"
      >
        Поля ввода
      </Link>
      <Link
        to="/selects"
        className="text-[22px] font-semibold text-[#5073A5] hover:text-[#456894] transition"
      >
        Селекты
      </Link>
      <Link
        to="/textareas"
        className="text-[22px] font-semibold text-[#5073A5] hover:text-[#456894] transition"
      >
        Текстовые области
      </Link>
    </div>
  )
}
