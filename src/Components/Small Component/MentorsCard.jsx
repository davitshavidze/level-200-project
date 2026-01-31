import { useNavigate } from "react-router-dom";
function MentorsCard({ pfp, name, role, txt, fb }) {
  const nav = useNavigate()
  return (
    <div className="w-75 overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="p-3">
        <img
          src={pfp}
          alt={name}
          className="w-full h-64 object-cover rounded-2xl transition-transform duration-300"
        />
      </div>

      <div className="px-6 pb-6 pt-2">
        <span className="text-xs font-bold uppercase tracking-wider text-green-800">
          {role}
        </span>

        <h3 className="mt-1 text-2xl font-bold text-slate-800">{name}</h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">{txt}</p>


        <button className="mt-6 w-full py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-800 transition-all duration-300 cursor-pointer" onClick={() => {nav(fb)}}>
          View Profile
        </button>
      </div>
    </div>
  );
}

export default MentorsCard;
