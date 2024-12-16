import { ArrownDown, DownArrow } from '@icons/index'
import { useBreakpointGlobal } from '@store/breakpointGlobal'
import { theme } from '@theme/theme'
import type React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { Container, Label } from './style'

interface ISelectPciker {
	mt: number
}

export const SelectPicker: React.FC<ISelectPciker> = ({ mt }) => {
	const large = useBreakpointGlobal((state) => state.break)

	return (
		<Container>
			<Label $large={large} $mt={mt}>
				Pronomes
			</Label>

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
						borderRadius: 5,
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
		</Container>
	)
}

export default SelectPicker
