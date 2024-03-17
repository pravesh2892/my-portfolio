const Project = () => {
	let data = [
		{
			id: 1,
			img_url:
				"https://arjun40779.github.io/portfolio/project-icons/weather.PNG",
			title: "Weather App",
			text: "check live weather records of different cities",
			git_url: "https://github.com/pravesh2892/weather",
			host_url: "https://g8c3r7.csb.app/",
		},

		{
			id: 2,
			img_url: "https://raw.githubusercontent.com/pravesh2892/icons-project/main/icons/credd.jpg",
			title: "CREDD landing page",
			text: "Search for ISRO centers based on place, state and name",
			git_url:
				"https://github.com/pravesh2892/credapp/tree/main/cred-app-clone",
			host_url: "https://creadapp1.pages.dev/",
		},

		{
			id: 3,
			img_url:
				"https://raw.githubusercontent.com/pravesh2892/icons-project/main/icons/realstate-website.jpg",
			title: "RealState website",
			text: "Browse pokemon stasts ",
			git_url: "https://github.com/pravesh2892/Real-Estate-website",
			host_url: "https://realstatewebsite-2vm.pages.dev/",
		},
		{
			id: 4,
			img_url:
				"https://arjun40779.github.io/portfolio/project-icons/movieDeck.png",
			title: "MovieDeck",
			text: "Browse through large database of movies",
			git_url: "https://github.com/pravesh2892/movie-desk-project",
			host_url: "https://movie-deck-lac.vercel.app/",
		},
		{
			id: 5,
			img_url: "https://raw.githubusercontent.com/pravesh2892/icons-project/main/icons/soundcloud.jpg",
			title: "Sound cloud clone",
			text: "SoundClone is a music streaming web application. ",
			git_url:
				"https://github.com/pravesh2892/Sound-Cloud-Music",
			host_url: "https://soundcloud1.pages.dev/",
		},
		{
			id: 6,
			img_url:
				"https://raw.githubusercontent.com/pravesh2892/icons-project/main/icons/beyoung.jpg",
			title: "Beyoung-clone",
			text: "Beyoung is an online shopping site for men's and women's clothing in India. They offer a wide range of options, including: Tees, Topwear, Shirts, Boxers, Sweatpants, Joggers, Chino pants, Jeans, Pyjamas, Formal pants.",
			git_url:
				"https://github.com/pravesh2892/beyoung-shpping-website-1",
			host_url: "https://beyoung-shpping-website.vercel.app/",
		},
	];

	return (
		<section className="projects" id="projects">
			<div className="container">
				<h3>PROJECTS</h3>
				<h5>Each project is a unique piece of development</h5>

				<div className="project-content">
					{data.reverse().map((item) => {
						return (
							<div key={item.id} className="project-items">
								<div className="card">
									<img
										className="card-img-top"
										src={item.img_url}
										alt="Card image cap"
									/>
									<div className="card-body">
										<p className="card-title">{item.title}</p>
										{/*  <p className="card-text">
                {item.text}
              </p> */}
										<div className="cardbtn">
											<a href={item.git_url} className="btn " target="_blank">
												Code &nbsp;&nbsp;
												<i class="fa-brands fa-github"></i>
											</a>
											<a href={item.host_url} className="btn" target="_blank">
												Live Demo &nbsp;
												<i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/* <h4>More coming soon..</h4> */}
		</section>
	);
};
export default Project;
