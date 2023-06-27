import {useCurrentFrame, useVideoConfig} from 'remotion';

export const MyComposition = () => {
	const {fps, durationInFrames, width, height} = useVideoConfig();

	const frame = useCurrentFrame();

	const opacity = frame / durationInFrames;

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				backgroundColor: 'black',
				color: 'white',
			}}
		>
			<div
				style={{
					opacity,
				}}
			>
				Hello World!{' '}
			</div>
		</div>
	);
};
