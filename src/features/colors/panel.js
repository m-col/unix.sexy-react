import React from 'react';
import { useSelector } from 'react-redux';

import Color from 'components/color';
import OptBox from 'components/optbox';
import {
	setColor,
	selectColors,
} from './slice';


export function ColorCtl() {
  const style = useSelector(selectColors);

	return (
		<OptBox className="colorCtl" label="Color Scheme" width="600px">

			<div>
				0<Color value={style.color0} callback={color => setColor({id:'color0', color:color})} />
				&nbsp;8<Color value={style.color8} callback={color => setColor({id:'color8', color:color})} />
				5<Color value={style.color5} callback={color => setColor({id:'color5', color:color})} />
				13<Color value={style.color13} callback={color => setColor({id:'color13', color:color})} />
			</div>

			<div>
				1<Color value={style.color1} callback={color => setColor({id:'color1', color:color})} />
				&nbsp;9<Color value={style.color9} callback={color => setColor({id:'color9', color:color})} />
				6<Color value={style.color6} callback={color => setColor({id:'color6', color:color})} />
				14<Color value={style.color14} callback={color => setColor({id:'color14', color:color})} />
			</div>

			<div>
				2<Color value={style.color2} callback={color => setColor({id:'color2', color:color})} />
				10<Color value={style.color10} callback={color => setColor({id:'color10', color:color})} />
				7<Color value={style.color7} callback={color => setColor({id:'color7', color:color})} />
				15<Color value={style.color15} callback={color => setColor({id:'color15', color:color})} />
			</div>

			<div>
				3<Color value={style.color3} callback={color => setColor({id:'color3', color:color})} />
				11<Color value={style.color11} callback={color => setColor({id:'color11', color:color})} />
			</div>

			<div>
				4<Color value={style.color4} callback={color => setColor({id:'color4', color:color})} />
				12<Color value={style.color12} callback={color => setColor({id:'color12', color:color})} />
				bg<Color value={style.background} callback={color => setColor({id:'background', color:color})} />
			  fg<Color value={style.foreground} callback={color => setColor({id:'foreground', color:color})} />
			</div>

		</OptBox>
	);
}
