const shotcutEmojiMap = new Map();

const SLIGHTLY_SMILING_FACE = ":)";
const SMILING_EYES = ">_<";
const SAD_FACE = ":(";
const VERY_SAD_FACE = ":'(";

shotcutEmojiMap.set(SLIGHTLY_SMILING_FACE, "😃");
shotcutEmojiMap.set(SMILING_EYES, "😆");
shotcutEmojiMap.set(SAD_FACE, "😞");
shotcutEmojiMap.set(VERY_SAD_FACE, "😢");

export default shotcutEmojiMap;
export const allEmojiShotcut = [SLIGHTLY_SMILING_FACE, SMILING_EYES, SAD_FACE, VERY_SAD_FACE];
