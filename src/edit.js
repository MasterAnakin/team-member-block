import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={['blocks/team-member-block']}
				template={[
					['blocks/team-member-block'],
					['blocks/team-member-block'],
					['blocks/team-member-block'],
				]}
			/>
		</div>
	);
}
