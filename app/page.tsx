import {
	BrainCogIcon,
	EyeIcon,
	GlobeIcon,
	MonitorSmartphoneIcon,
	ServerCogIcon,
	ZapIcon,
} from 'lucide-react';

const features = [
	{
		name: 'Store your PDF documents',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: GlobeIcon,
	},
	{
		name: 'Blazing fast responses',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: ZapIcon,
	},
	{
		name: 'Chat memorization',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: BrainCogIcon,
	},
	{
		name: 'Interactive pdf viewer',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: EyeIcon,
	},
	{
		name: 'Cloud backup',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: ServerCogIcon,
	},
	{
		name: 'Responsive design',
		description:
			'Keep all your pdf files in one place secured and accessible from anywhere, anytime',
		icon: MonitorSmartphoneIcon,
	},
];

export default function Home() {
	return (
		<main className="pt-5">
			<div className="border border-r-cyan-500">
				<h3>Your </h3>
			</div>
		</main>
	);
}
