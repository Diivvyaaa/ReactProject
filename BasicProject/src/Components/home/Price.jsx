function Price({ currency, price }) {
  return (
    <span className="font-body text-[1.05rem] font-semibold text-[#c9502a] tracking-[0.01em]">
      {currency}
      <span>{price.toFixed(2)}</span>
    </span>
  );
}

export default Price;
