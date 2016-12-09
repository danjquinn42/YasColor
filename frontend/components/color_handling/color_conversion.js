class ColorConversion {

  RgbToHsl(red, green, blue){
    return true;
  }

  HslToRgb(hue, saturaton, lightness){
    hue = hue / 360;
    saturaton = saturaton / 100;
    lightness = lightness / 100;

    let red, green, blue;

    if (saturation === 0){
      red = green = blue = lightness;
    }

    var q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;


    }
  }

  hueToRgb(p, q, hue){
    return true;
  }


}
