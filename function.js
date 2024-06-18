function headerblock(){
    document.write(`

    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div>
    <!-- Spinner End -->

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"crossorigin="anonymous"></script>


    <!-- Navbar Start -->
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fas fa-map-marker-alt text-primary me-2"></i>483 Main Road, Kovilpatti, India.</small>
                <!--
                <small class="ms-4"><i class="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
                -->
            </div>
            <div class="col-lg-6 px-5 text-end">
                <small><i class="fa fa-envelope text-primary me-2"></i><a href="mailto:contact@bluontech.com">contact@bluontech.com</a></small>
                <small class="ms-4"><i class="fas fa-phone-alt text-primary me-2"></i><a href="tel:+918754801550">+91 87548 01550</a></small>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.php" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="display-5 text-primary m-0">Bluon Tech</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.php" class="nav-item nav-link">Home</a>
                    <!--<a href="about.php" class="nav-item nav-link">About Us</a>-->
                    <div class="nav-item dropdown">
                        <a href="about.php" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                        <div class="dropdown-menu border-light m-0">
                            <a href="about.php" class="dropdown-item">About Bluon Tech</a>
                            <a href="client.html" class="dropdown-item">Our Clients</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="career.php" class="dropdown-item">Career</a>
                            <!--<a href="404.html" class="dropdown-item">404 Page</a>-->
                        </div>
                    </div>
                    <!--<a href="products.php" class="nav-item nav-link">Products</a>-->
                    <div class="nav-item dropdown">
                        <a href="about.php" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                        <div class="dropdown-menu border-light m-0">
                            <a href="bluonerp.php" class="dropdown-item">Bluon ERP</a>
                            <a href="bluonbiometrics.php" class="dropdown-item">Bluon Biometrics</a>
                            <a href="bluonweb.php" class="dropdown-item">Bluon Web</a>
                            <a href="bluonmail.php" class="dropdown-item">Bluon Mail</a>
                            <!--<a href="404.html" class="dropdown-item">404 Page</a>-->
                        </div>
                    </div>
<style type="text/css">
    .navbar .megamenu { padding: 1rem; }

    /* ============ desktop view ============ */
    @media all and (min-width: 992px) {
        .navbar .has-megamenu { position: static !important; }
        .navbar .megamenu { left: 0; right: 0; width: 100%; margin-top: 0;}
    }	
    /* ============ desktop view .end// ============ */

    /* ============ mobile view ============ */
    @media(max-width: 991.98px) {
        .navbar.fixed-top .navbar-collapse, 
        .navbar.sticky-top .navbar-collapse {
            overflow-y: auto; /* Enable vertical scrolling */
            max-height: 80vh; /* Limit maximum height to 80% of viewport height */
            margin-top: 5px; /* Optional: Adjust margin top as needed */
        }

        .dropdown-menu.megamenu {
            overflow-y: auto; /* Enable vertical scrolling for dropdown menu */
            max-height: 60vh; /* Limit maximum height of dropdown menu */
            padding: 1rem; /* Optional: Adjust padding for better spacing */
        }

        .col-megamenu {
            padding-bottom: 1rem; /* Add bottom padding to submenu items */
        }
    }
    /* ============ mobile view .end// ============ */
</style>


<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", function(){
        /////// Prevent closing from click inside dropdown
        document.querySelectorAll('.dropdown-menu').forEach(function(element){
        	element.addEventListener('click', function (e) {
        		e.stopPropagation();
        	});
        })
    }); 
	// DOMContentLoaded  end
</script>
<li class="nav-item dropdown has-megamenu">
				<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Services  </a>
				<div class="dropdown-menu megamenu" role="menu">
					<div class="row" style="font-size:13px;">
                        <div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Web Developement</h6>
								<ul class="list-unstyled">
									<li><a href="front-end-development-in-kovilpatti.php" style="text-decoration: none;">Front End Development</a></li>
									<li><a href="back-end-development-in-kovilpatti.php" style="text-decoration: none;">Back End Development</a></li>
									<li><a href="full-stack-development.php" style="text-decoration: none;">Full Stack Development</a></li>
									<li><a href="content-management-system.php" style="text-decoration: none;">Content Management System</a></li>
									<li><a href="e-commerce.php" style="text-decoration: none;">E-Commerce</a></li>
									<li><a href="web-application-development.php" style="text-decoration: none;">Web Application Development</a></li>
								<li><a href="api-development-and-integration.php" style="text-decoration: none;">API Development and Integration</a></li>
                                <li><a href="web-hosting-and-domain-services-in-kovilpatti.php" style="text-decoration: none;">Web Hosting and Domain Services</a></li>
                                <li><a href="seo-in-web-development.php" style="text-decoration: none;">SEO</a></li>
                                <li><a href="maintenance-and-support.php" style="text-decoration: none;">Maintenance and Support</a></li>
                                </ul>
							</div>  <!-- col-megamenu.// -->
						</div><!-- end col-3 -->
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Software Development</h6>
								<ul class="list-unstyled">
									<li><a href="cloud-solution.php">Cloud Solution</a></li>
									<li><a href="custom-software-development.php">Custom Software Development</a></li>
									<li><a href="software-integration.php">Software Integration</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div><!-- end col-3 -->
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Software Testing</h6>
								<ul class="list-unstyled">
									<li><a href="manual-testing.php">Manual Testing</a></li>
									<li><a href="automated-testing.php">Automated Testing</a></li>
									<li><a href="functional-testing.php">Functional Testing</a></li>
									<li><a href="non-functional-testing.php">Non Functional Testing</a></li>
									<li><a href="regression-testing.php">Regression Testing</a></li>
									<li><a href="user-acceptance-testing.php">User Acceptance Testing</a></li>
									<li><a href="integration-testing.php">Integration Testing</a></li>
									<li><a href="performance-testing-in-kovilpatti.php">Performance Testing</a></li>
									<li><a href="security-testing-in-kovilpatti.php">Security Testing</a></li>
									<li><a href="mobile-testing.php">Mobile Testing</a></li>
									<li><a href="usability-testing.php">Usability Testing</a></li>
									<li><a href="accessibility-testing.php">Accessibility Testing</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div>    
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">SEO</h6>
								<ul class="list-unstyled">
									<li><a href="keyword-research.php">Keyword Research</a></li>
									<li><a href="on-page-optimization.php">On-page Optimization</a></li>
									<li><a href="technical-seo.php">Technial SEO</a></li>
									<li><a href="off-page-optimization.php">Off-page Optimization</a></li>
									<li><a href="content-creation-and-optimization.php">Content Creation and Optimization</a></li>
									<li><a href="local-seo.php">Local SEO</a></li>
									<li><a href="e-commerce-seo.php">E-Commerce SEO</a></li>
									<li><a href="mobile-seo.php">Mobile SEO</a></li>
									<li><a href="seo-audit-and-analysis.php">SEO Audits and Analysis</a></li>
									<li><a href="seo-strategy-and-consultation.php">SEO Strategy and Consultation</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div>
                        <div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Digital Marketing</h6>
								<ul class="list-unstyled">
									<li><a href="seo.php">Search Engine Optimization</a></li>
									<li><a href="sem.php">Search Engine Marketing</a></li>
									<li><a href="smm.php">Social Media Marketing</a></li>
									<li><a href="content-marketing.php">Content Marketing</a></li>
									<li><a href="email-marketing.php">Email Marketing</a></li>
									<li><a href="pay-per-click-advertising.php">Pay-Per Click Advertising(PPC)</a></li>
								<li><a href="influencer-marketing.php">Influencer Marketing</a></li>
                                <li><a href="video-marketing.php">Video Marketing</a></li>
                                <li><a href="digital-analytics-and-reporting.php">Digital Analytics and Reporting</a></li>
                                <li><a href="conversion-rate-optimization.php">Conversion Rate Optimization</a></li>
									<li><a href="marketing-automation.php">Marketing Automation</a></li>
                                </ul>
							</div>  <!-- col-megamenu.// -->
						</div><!-- end col-3 -->
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Mobile App Development</h6>
								<ul class="list-unstyled">
									<li><a href="consultation-and-strategy.php">Consultation And Strategy</a></li>
									<li><a href="ui-ux-design.php">UI/UX Design</a></li>
									<li><a href="native-app-development.php">Native App Development</a></li>
									<li><a href="cross-platform-app-development.php">Cross-Platform App Development</a></li>
									<li><a href="hybrid-app-development.php">Hybrid App Development</a></li>
									<li><a href="mobile-backend-development.php">Mobile Backend Development</a></li>
									<li><a href="app-testing-and-quality-assurance.php">App Testing and Quality Assurance</a></li>
									<li><a href="app-development-and-distribution.php">App Development and Distribution</a></li>
									<li><a href="app-maintenance-and-support.php">App Maintenance and Support</a></li>
									<li><a href="app-analytics-and-optimization.php">App Analytics and Optimization</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div><!-- end col-3 -->
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">BPO</h6>
								<ul class="list-unstyled">
									<li><a href="data-management-and-processing.php">Data Management and Processing</a></li>
									<li><a href="technical-support-and-help-desk.php">Technical Support and Help Desk</a></li>
									<li><a href="application-development-and-maintenance.php">Application Development and Maintenance</a></li>
									<li><a href="it-security-solutions.php">IT Security Solutions</a></li>
									<li><a href="infrastructure-management.php">Infrastructure Management</a></li>
									<li><a href="quality-assurance-and-testing.php">Quality Assurance and Testing</a></li>
									<li><a href="project-management-support.php">Project Management Support</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div>    
						<div class="col-lg-3 col-6">
							<div class="col-megamenu">
								<h6 class="title">Training</h6>
								<ul class="list-unstyled">
									<li><a href="programming-and-development-courses.php">Programming and Development Courses</a></li>
									<li><a href="web-development-and-design-workshops.php">Web Development and Design Workshops</a></li>
									<li><a href="cloud-computing-and-devops-training.php">Cloud Computing and DevOps Training</a></li>
									<li><a href="data-science-and-analytics-bootcamps.php">Data Science and Analytics Bootcamps</a></li>
									<li><a href="cybersecurity-training-programs.php">CyberSecurity Training Program</a></li>
								</ul>
							</div>  <!-- col-megamenu.// -->
						</div><!-- end col-3 --><!-- end col-3 -->
					</div><!-- end row --> 
				</div> <!-- dropdown-mega-menu.// -->
			</li>
                    <!--<a href="services.php" class="nav-item nav-link">Services</a>
                    <div class="nav-item dropdown">
                        <a href="services.php" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div class="dropdown-menu border-light m-0" style="width:1000px; left: auto !important; right:0; max-height: 600px; overflow-y: auto;">
                            <div class="container">
                                <div class="row">
                                <div class="col">
                                        <h6 class="dropdown-header"><a href="webdevelopment.php">Web Development</a></h6>
                                        <a href="front-end-development-in-kovilpatti.php" class="dropdown-item">Front End Development</a>
                                        <a href="back-end-development-in-kovilpatti.php" class="dropdown-item">Back End Development</a>
                                        <a href="full-stack-development.php" class="dropdown-item">Full Stack Development</a>
                                        <a href="content-management-system.php" class="dropdown-item">Content Management System</a>
                                        <a href="e-commerce.php" class="dropdown-item">E-Commerce</a>
                                        <a href="web-application-development.php" class="dropdown-item">Web Application Development</a>
                                        <a href="api-development-and-integration.php" class="dropdown-item">API Development and Integration</a>
                                        <a href="web-hosting-and-domain-services-in-kovilpatti.php" class="dropdown-item">Web Hosting and Domain Service</a>
                                        <a href="seo-in-web-development.php" class="dropdown-item">SEO</a>
                                        <a href="maintenance-and-support.php" class="dropdown-item">Maintenance and Support</a>
                                    </div>
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="softwaredevelopment.php">Software Development</a></h6>
                                        <a href="cloud-solution.php" class="dropdown-item">Cloud Solution</a>
                                        <a href="custom-software-development.php" class="dropdown-item">Custom Software Development</a>
                                        <a href="software-integration.php" class="dropdown-item">Software Integration</a>
                                    </div>
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="softwaretesting.php">Software Testing</a></h6>
                                        <a href="manual-testing.php" class="dropdown-item">Manual Testing</a>
                                        <a href="automated-testing.php" class="dropdown-item">Automated Testing</a>
                                        <a href="functional-testing.php" class="dropdown-item">Functional Testing</a>
                                        <a href="non-functional-testing.php" class="dropdown-item">Non Functional Testing</a>
                                        <a href="regression-testing.php" class="dropdown-item">Regression Testing</a>
                                        <a href="user-acceptance-testing.php" class="dropdown-item">User Acceptance Testing</a>
                                        <a href="integration-testing.php" class="dropdown-item">Integration Testing</a>
                                        <a href="performance-testing-in-kovilpatti.php" class="dropdown-item">Performance Testing</a>
                                        <a href="security-testing-in-kovilpatti.php" class="dropdown-item">Security Testing</a>
                                        <a href="mobile-testing.php" class="dropdown-item">Mobile Testing</a>
                                        <a href="usability-testing.php" class="dropdown-item">Usability Testing</a>
                                        <a href="accessibility-testing.php" class="dropdown-item">Accessibility Testing</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="seo.php">SEO</a></h6>
                                        <a href="keyword-research.php" class="dropdown-item">Keyword Research</a>
                                        <a href="on-page-optimization.php" class="dropdown-item">On-page Optimization</a>
                                        <a href="technical-seo.php" class="dropdown-item">Technical SEO</a>
                                        <a href="off-page-optimization.php" class="dropdown-item">Off-Page Optimization</a>
                                        <a href="content-creation-and-optimization.php" class="dropdown-item">Content Creation and Optimization</a>
                                        <a href="local-seo.php" class="dropdown-item">Local SEO</a>
                                        <a href="e-commerce-seo.php" class="dropdown-item">E-Commerce SEO</a>
                                        <a href="mobile-seo.php" class="dropdown-item">Mobile SEO</a>
                                        <a href="seo-audit-and-analysis.php" class="dropdown-item">SEO Audits and Analysis</a>
                                        <a href="seo-strategy-and-consultation.php" class="dropdown-item">SEO Strategy and Consulting</a>
                                    </div>
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="digitalmarketing.php">Digital Marketing</a></h6>
                                        <a href="seo.php" class="dropdown-item">Search Engine Optimization</a>
                                        <a href="sem.php" class="dropdown-item">Search Engine Marketing</a>
                                        <a href="smm.php" class="dropdown-item">Social Media Marketing</a>
                                        <a href="content-marketing.php" class="dropdown-item">Content Marketing</a>
                                        <a href="email-marketing.php" class="dropdown-item">Email Marketing</a>
                                        <a href="pay-per-click-advertising.php" class="dropdown-item">Pay-Per Click Advertising(PPC)</a>
                                        <a href="influencer-marketing.php" class="dropdown-item">Influencer Marketing</a>
                                        <a href="video-marketing.php" class="dropdown-item">Video Marketing</a>
                                        <a href="digital-analytics-and-reporting.php" class="dropdown-item">Digital Analytics and Reporting</a>
                                        <a href="conversion-rate-optimization.php" class="dropdown-item">Conversion Rate Optimization(CRO)</a>
                                        <a href="marketing-automation.php" class="dropdown-item">Marketing Automation</a>
                                    </div>
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="mobileappdevelopemnt.php">Mobile App Development</a></h6>
                                        <a href="consultation-and-strategy.php" class="dropdown-item">Consultation and Strategy</a>
                                        <a href="ui-ux-design.php" class="dropdown-item">UI/UX Design</a>
                                        <a href="native-app-development.php" class="dropdown-item">Native App Development</a>
                                        <a href="cross-platform-app-development.php" class="dropdown-item">Cross-Platform App Development</a>
                                        <a href="hybrid-app-development.php" class="dropdown-item">Hybrid App Development</a>
                                        <a href="mobile-backend-development.php" class="dropdown-item">Mobile Backend Development</a>
                                        <a href="app-testing-and-quality-assurance.php" class="dropdown-item">App Testing and Quality Assurance</a>
                                        <a href="app-development-and-distribution.php" class="dropdown-item">App Development and Distribution</a>
                                        <a href="app-maintenance-and-support.php" class="dropdown-item">App Maintenance and Support</a>
                                        <a href="app-analytics-and-optimization.php" class="dropdown-item">App Analytics and Optimization</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="bpo.php">BPO</a></h6>
                                        <a href="data-management-and-processing.php" class="dropdown-item">Data Management and Processing</a>
                                        <a href="technical-support-and-help-desk.php" class="dropdown-item">Technical Support and Help Desk</a>
                                        <a href="application-development-and-maintenance.php" class="dropdown-item">Application Development and Maintenance</a>
                                        <a href="it-security-solutions.php" class="dropdown-item">IT Security Solutions</a>
                                        <a href="infrastructure-management.php" class="dropdown-item">Infrastructure Management</a>
                                        <a href="quality-assurance-and-testing.php" class="dropdown-item">Quality Assurance and Testing</a>
                                        <a href="project-management-support.php" class="dropdown-item">Project Management Support</a>
                                    </div>
                                    <div class="col">
                                        <h6 class="dropdown-header"><a href="training.php">Training</h6>
                                        <a href="programming-and-development-courses.php" class="dropdown-item">Programming and Development Courses</a>
                                        <a href="web-development-and-design-workshops.php" class="dropdown-item">Web Development and Design Workshops</a>
                                        <a href="cloud-computing-and-devops-training.php" class="dropdown-item">Cloud Computing and DevOps Training</a>
                                        <a href="data-science-and-analytics-bootcamps.php" class="dropdown-item">Data Science and Analytics Bootcamps</a>
                                        <a href="cybersecurity-training-programs.php" class="dropdown-item">Cybersecurity Training Programs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>--><!--<a href="career.php" class="nav-item nav-link">Career</a>-->
                    <a href="contact.php" class="nav-item nav-link">Contact Us</a>
                </div>
                <div class="d-none d-lg-flex ms-2">
                    <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.facebook.com/people/Bluon-Tech/100089313514513/" target="blank">
                        <small class="fab fa-facebook-f text-primary"></small>
                    </a>
                    <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.instagram.com/bluon_tech/?igshid=YmMyMTA2M2Y%3D" target="blank">
                        <small class="fab fa-instagram text-primary"></small>
                    </a>
                    <a class="btn btn-light btn-sm-square rounded-circle ms-3" href="https://www.linkedin.com/company/bluontech" target="blank">
                        <small class="fab fa-linkedin-in text-primary"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    <!-- Navbar End -->

    
    
    `);
}

function footerblock(){
    document.write(`
    
    

    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Bluon Tech</h4>
                    <p>Bluon Tech was formed in 2022, we are a prime software development company, specializing in outsourcing services and website Development. </p>
                    <div class="d-flex pt-2">
                       <!-- <a class="btn btn-square btn-outline-light rounded-circle me-2" href=""><i
                                class="fab fa-twitter"></i></a>-->
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/people/Bluon-Tech/100089313514513/" target="blank"><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.instagram.com/bluon_tech/?igshid=YmMyMTA2M2Y%3D" target="blank"><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.linkedin.com/company/bluontech" target="blank"><i
                                class="fab fa-linkedin-in" target="blank"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-white mb-4">Services</h4>
                    <a class="btn btn-link" href="webdevelopment.php">Web Development</a>
                    <a class="btn btn-link" href="softwaredevelopment.php">Software Development</a>
                    <a class="btn btn-link" href="softwaretesting.php">Software Testing</a>
                    <a class="btn btn-link" href="mobileappdevelopment.php">Mobile App Development</a>
                    <a class="btn btn-link" href="digitalmarketing.php">Digital Marketing</a>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h4 class="text-white mb-4">Quick Links</h4>
                    <a class="btn btn-link" href="about.php">About Us</a>
                    <a class="btn btn-link" href="products.php">Products</a>
                    <a class="btn btn-link" href="services.php">Services</a>
                    <a class="btn btn-link" href="career.php">Career</a>
                    <a class="btn btn-link" href="contact.php">Contact Us</a>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="text-white mb-4">Newsletter</h4>                    
                  
                    <p>
                    Get the latest tech trends, product updates, and exclusive offers delivered straight to your inbox.</p>
                    <div class="position-relative w-100">
                    <form class="" action="footer.php" method="post" autocomplete="off" enctype="multipart/form-data"> 
                    <input class="form-control bg-white border-0 w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email" name="useremail" required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"> 
                        <!--<button type="button" name="enter"
                            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Join !</button>-->
                            <button class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2" name="enter">Join !</button>   
</form>
                    </div>
                    <script>
                    function handleFormSubmit() {
                        var currentPageUrl = window.location.href;
                        document.forms[0].action = currentPageUrl;
                        return true;
                    }
                </script>   
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->
 
    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="https://bluontech.com">Bluon Tech</a>, All Right Reserved.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a class="border-bottom" href="https://bluontech.com">Bluon Tech</a> 
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->
    <style>
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }

    .btn-whatsapp {
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: linear-gradient(45deg, #25D366, #128C7E); /* Vibrant gradient colors */
        color: white;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        animation: pulse 2s infinite; /* Add a pulse animation */
        transition: background 0.3s ease; /* Smooth transition on hover */
    }

    .btn-whatsapp:hover {
        background: linear-gradient(45deg, #128C7E, #25D366); /* Reverse the gradient colors on hover */
    color:green;
    }

    .fa-whatsapp {
        font-size: 30px;
    }
    </style>
    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            class="bi bi-arrow-up"></i>
    </a>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    
    
   <!-- <a href="https://api.whatsapp.com/send?phone=+918754801550&text=Hi%20Bluon%20Tech%20Team,%20We%20Need%20Service%20Of%20You%20!." class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" style="position: fixed; bottom: 30px; left: 30px;" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
</a>-->
<a href="https://api.whatsapp.com/send?phone=+918754801550&text=Hi%20Bluon%20Tech%20Team,%20We%20Need%20Service%20Of%20You%20!." class="btn-whatsapp" target="_blank">
    <i class="fa fa-whatsapp my-float" style="font-size:35px;margin-top:2px;"></i>
</a>
            
    `)
}
