const shotcutEmojiMap = new Map();

const SMILE = ":)";
const SMILING_EYES = ">_<";
const SAD_FACE = ":(";
const VERY_SAD_FACE = ":'(";

shotcutEmojiMap.set(SMILE, "🙂");
shotcutEmojiMap.set(SMILING_EYES, "😆");
shotcutEmojiMap.set(SAD_FACE, "😞");
shotcutEmojiMap.set(VERY_SAD_FACE, "😢");

export default shotcutEmojiMap;
export const allEmojiShotcut = [SMILE, SMILING_EYES, SAD_FACE, VERY_SAD_FACE];
