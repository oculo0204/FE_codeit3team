const formatLikeCount = (count: number | undefined): string => {
  // count가 undefined일 경우 기본값 0을 사용
  const validCount = count ?? 0;
  return validCount.toLocaleString('en', { maximumFractionDigits: 1, notation: 'compact' });
}

export default formatLikeCount;
