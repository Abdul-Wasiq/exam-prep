const Footer = () => {
	return (
		<footer
			style={{
				backgroundColor: '#176ff2', // ← CHANGE: background color
				color: '#ffffff',
				padding: '30px 20%',
				marginTop: 'auto',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '40px',
					maxWidth: '760px',
					margin: '0 auto',
					flexWrap: 'wrap',
				}}
			>
				<div>
					<h3 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 400 }}>Links</h3>
					<a href="/" style={{ display: 'block', color: 'inherit', textDecoration: 'none', marginBottom: '4px' }}>Home</a> {/* ← CHANGE: "Home" */}
					<a href="/doctors" style={{ display: 'block', color: 'inherit', textDecoration: 'none', marginBottom: '4px' }}>Doctors</a> {/* ← CHANGE: "/doctors" and "Doctors" */}
					<a href="/register" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>Register</a> {/* ← CHANGE: "/register" and "Register" */}
				</div>
				<div>
					<h3 style={{ margin: '0 0 10px', fontSize: '22px', fontWeight: 400 }}>Contact Info</h3>
					<a href="/contact" style={{ display: 'block', color: 'inherit', textDecoration: 'none', marginBottom: '4px' }}>Contact Us</a>
					<a href="tel:+923001234567" style={{ display: 'block', color: 'inherit', textDecoration: 'none', marginBottom: '4px' }}>+92 300 1234567</a> {/* ← CHANGE: phone number */}
					<a href="mailto:health@portal.com" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>health@portal.com</a> {/* ← CHANGE: email */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;