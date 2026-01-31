function ReviewCard({ review }) {
  return (
    <div className="min-h-50 bg-gray-100 rounded-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-xl font-semibold text-green-600">{review.name}</h4>
          <p className="text-lg text-gray-500">{review.role}</p>
        </div>
      </div>

      <p className="text-sm text-gray-600">{review.text}</p>
    </div>
  );
}

export default ReviewCard;
