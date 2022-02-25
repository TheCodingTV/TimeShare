function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
	return {
		x: centerX + (radius * Math.cos(angleInRadians)),
		y: centerY + (radius * Math.sin(angleInRadians))
	}
}

function getSectorPath (angle) {
  // 1 - 0 => 0 - 360
  angle = 360 - 360 * angle
  const opts = {
    cx: 200,
    cy: 200,
    radius: 200,
    start_angle: 0,
    end_angle: angle
  }

  const end = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle)
  const start = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle)

  let d
  if (angle === 0) {
    d = [
      "M", start.x, start.y,
      "A", opts.radius, opts.radius, 0, 1, 0, 201, end.y,
    ].join(" ")
  } else {
    d = [
      "M", start.x, start.y,
      "A", opts.radius, opts.radius, 0, 1, 0, end.x, end.y,
      "L", opts.cx, opts.cy,
      "Z"
    ].join(" ")
  }
  return d
}

function drawSectorCanvas (canvas, angle) {
  const context = canvas.getContext('2d')
  context.fillStyle = '#364fc7'
  context.moveTo(150,75)
  context.arc(150, 75, 75, -Math.PI / 2, (angle * 4 - 1) * Math.PI / 2)
  context.lineTo(150,75)
  context.fill()
}

export default {
  drawSectorCanvas,
  getSectorPath
}

