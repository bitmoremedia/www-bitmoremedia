const bgImageCoverStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  objectFit: 'cover',
  // below is a hack to support ie (also requires the object-fit-images polyfill)
  fontFamily: 'object-fit: cover',
}

export default bgImageCoverStyle

export const bgImageCoverStyle_zIndex0 = {
  ...bgImageCoverStyle,
  zIndex: 0,
}
