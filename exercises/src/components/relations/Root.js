/**
 * Children é uma propriedade do React que permite
 * passar JSX para outros componentes
 * 
 * <X>
 *  <Y></Y>
 *  <Z></Z>
 * </X>
 */

export default function Root({ children }) {
  return (
    <>
      { children }
    </>
  );
}
