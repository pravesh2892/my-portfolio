import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
export function Feedback() {
	const style = {
		margin: "1rem",
		width: "100%",
		backgroundColor: "white",
		padding: "1rem",
		zIndex: "-1",
	};
	return (
		<div className="feedback">
			<form
				action="https://formspree.io/f/xwkdjpok"
				method="POST"
				onSubmit={(e) => {}}
			>
				<input name="email" type="email" placeholder="Email" style={style} />
				<textarea
					name="message"
					rows={5}
					type="text"
					placeholder="Message"
					style={style}
				/>
				<button type="submit" id="submit">
					Send
				</button>
			</form>
		</div>
	);
}
