import { ArrownDown, DownArrow } from '@icons/index'
import { theme } from '@theme/theme'
import breakpoints from '@utils/dimensons'
import type React from 'react'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Label } from './style'

export const SelectPicker: React.FC = () => {
	const [large, setLarge] = useState<boolean>(false)

	useEffect(() => {
		if (breakpoints() > 568) setLarge(true)
	}, [])

	return (
		<View>
			<Label $large={large}>Pronomes</Label>

			<RNPickerSelect
				useNativeAndroidPickerStyle={false}
				onValueChange={(value) => console.log(value)}
				items={[
					{ label: 'Ela/Dela', value: 'ela/dela' },
					{ label: 'Ele/Dele', value: 'ele/dele' },
					{ label: 'Elu/Delu', value: 'elu/delu' },
					{ label: 'Prefiro não dizer', value: 'undefined' },
					{ label: 'Qualquer Pronome', value: 'indefinido' },
				]}
				activeItemStyle={{
					backgroundColor: `${theme.colors.greyScale.frenchGray}`,
				}}
				placeholder={{
					inputLabel: 'Selecione uma Opção',
					label: 'Selecione uma Opção',
					color: `${theme.colors.greyScale.dimGray}`,
				}}
				style={{
					inputAndroid: {
						height: 44,
						display: 'flex',
						borderColor: `${theme.colors.greyScale.strokeWhite}`,
						borderWidth: 1,
						borderRadius: 10,
						color: `${theme.colors.greyScale.dimGray}`,
						fontFamily: `${theme.fonts.hind.semiBold}`,
						paddingLeft: 14,
					},
					iconContainer: {
						marginTop: 22,
						right: 14,
						justifyContent: 'center',
						alignItems: 'center',
					},
				}}
				Icon={() => (
					<ArrownDown
						width={10}
						height={6}
						color={theme.colors.greyScale.dimGray}
					/>
				)}
			/>
		</View>
	)
}

export default SelectPicker
