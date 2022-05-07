    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".menu-list");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      menu.classList.add("active");
      menuBtn.classList.add("hide");
      cancelBtn.classList.add("show");
      body.classList.add("disabledScroll");
    }
    cancelBtn.onclick = ()=>{
      menu.classList.remove("active");
      menuBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }





    const swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			duration:2,
			autoplay: {
				delay: 5500,
				disableOnInteraction: false,
			  },
			navigation: {
				nextEl: '.slider__btn--right',
				prevEl: '.slider__btn--left',
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
			}
		});

		function GetParameterByName(name, url) {
			if(name == undefined) return
			if (!url) url = location.href
			
			name = name.replace(/[\[\]]/g, '\\$&')
		
			var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
			var results = regex.exec(url)
		
			if (!results) return null
			if (!results[2]) return ''
			return decodeURIComponent(results[2].replace(/\+/g, ' '))
		}

    	// Define Language Reload Anchors
		var dataReload = document.querySelectorAll("[data-reload]");

		// Language Translations
		var language = {
			eng: {
				welcome : "Responsibly lead your project to success",
				high: 'high'
			},
			es: {
				welcome : "lorem ipsum buenos dias la casa",
				high: 'opaa'
			}
		};




// TARAS ENGINEERING LANGUAGE FUNCTION


		// function setTranslations() {
		// 	let lang = GetParameterByName('lang') || 'eng'

		// 	if(language[lang] == undefined) {
		// 		window.history.replaceState({'lang': ''}, '', location.pathname)
		// 		lang = 'eng'
		// 	}

		// 	document.querySelectorAll('[data-translation]').forEach(e=> {
		// 		let attr = e.getAttribute('data-translation')
		// 		e.innerHTML = language[lang][attr]
		// 	})
		// }

		// setTranslations()




		// lang.addEventListener("change", function(ev) {
		// 	window.history.replaceState({}, 'lang', `?lang=${ev.target.checked ? 'es' : 'eng'}`)
		// 	setTranslations()
		// })

// TARAS ENGINEERING LANGUAGE FUNCTION


// INFOGRAPHIC

let itemsArr = [
	{
		color: '#4970b2',
		text: 'Planing',
		icon: './img/icons/icon.png',
		description: "Our construction managers will ensure that all work is done on time, to the customer’s satisfaction,  and within the projected budget. They will also  ensure that the construction project is compliant with current building codes and any other legal or regulatory requirements. They will carefully plan out each stage of the project, including timelines, materials lists, and job assignments, and will use benchmarks to track overall progress.",
		descriptionTwo: "The Construction Project Manager provided by Taras Engineering will plan how to keep your project on time and within budget, and will communicate with customers and employees effectively.",
		image:"./img/planingimg.png"
	},
	{
		color: '#4970b2',
		text: 'Estimation',
		icon: './img/icons/icon6.png',
		description: "Taras Engineering provides accurate and efficient blueprint and estimation services. Our team will deliver accurate, timely, and comprehensive estimates with emphasis on precision and attention to detail. We remain engaged with clients from conception to completion of the project.",
		image:"./img/mainPic.png"
	},
	{
		color: '#4970b2',
		text: 'Benchmarking',
		icon: './img/icons/icon4.png',
		description: "Benchmarks are checkpoints used, throughout a project, to determine progress and evaluate work. Benchmarking is crucial for an investor so that they may be aware of the status and progress of the project at all times. Without benchmarks, the construction project manager may find it difficult to understand how on track a project is and if it is being done within budget.",
		image:"./img/benchmarking.jpg"
	},
	{
		color: '#4970b2',
		text: 'Time Management',
		icon: './img/icons/icon9.png',
		description: "Our team is skilled at time management. In each project, the project manager must set a realistic timeline and consistently meet the benchmarks within it.",
		descriptionTwo: "We will estimate the duration of each step of the project to prevent delays due to human error. We will develop, maintain, evaluate, and adjust a schedule as necessary to ensure timely delivery of the final project. Using a time app makes time management easier for controlling tasks.",
		image:"./img/timemanagement.jpg"
	},
]

let item = ''
itemsArr.forEach((el, ind)=> {
	el.delay = ind * 250
	let {color, text, icon} = el
	item += `<li class="bom"  data-text="${text}" style="--color: ${color}; font-weight:lighter; --delay: ${el.delay}ms">
				
				<img class="itemImg" style:"font-weight:lighter;" src="${icon}">
				<span class="txt" style:"font-weight:lighter;">${text}</span>
			</li>`
})

items.innerHTML = item


let itemsArray = [
	{
		color: '#4970b2',
		text: 'Risk Management',
		icon: './img/icons/icon2.png',
		description: "Risk management is a key objective of construction project manager’s job. Risk management includes identifying and responding to potential issues throughout the project's duration in order to minimize potential negative impacts.",
		descriptionTwo: "Examples of Internal risks are unrealistic scheduling commitments and poor planning design. Examples of external risks are unforeseen regulatory requirements and natural disasters such as storms or earthquakes.",
		descriptionThree: "Many construction project managers create a contingency plan to have a proactive approach to risk management rather than a reactive one. We supervise general contractors and assist when necessary, and are responsible for ensuring that the project is adhering to health and safety standards.This allows us to be more effective and deliver the final project within its set specifications.",
		image:"./img/riskmanagement.jpg"
	},
	{
		color: '#4970b2',
		text: 'Distributing Resources',
		icon: './img/icons/icon5.png',
		description: "One of the construction project manager duties on every construction project is to procure and allocate the necessary resources and ensure that there are no shortages. A construction project manager must understand what materials are needed and make sure that there are enough to finish the job. Taras Engineering is able to manage any alterations made to the project scope and adjust the plan to accommodate for these changes. These alterations often stem from unforeseen circumstances and require the project manager to effectively redistribute the project resources. We correctly ensure resource availability and allocation, providing a guarantee that there wont be overall delay of the project. While delays are sometimes unavoidable, delays due to a construction manager s poor decision making can hurt the budget and waste company resources.  Our team effectively distributes resources, in order to avoid such problems and ensure the successful development of the project.",
		image:"./img/distributingresources.jpg"
	},
	{
		color: '#4970b2',
		text: 'Managing the Budget',
		icon: './img/icons/icon8.png',
		description: "Hiring and managing a general contractor and subcontractor is an important part of the construction responsibilities. For the project to be completed on time and within the scope, it is necessary to have effective communication between the contractor and the project manager.",
		descriptionTwo: "If the project manager is unable to communicate effectively with the staff, the project may have unclear goals, inefficient allocation of resources and poor quality of results.  A good project manager can motivate and direct his team to ensure a successful project.",
		descriptionThree: "Our company ensures and guarantees that the investor is 100% in control of the project, and properly informed in the construction process.  We consistently inform staff about project details and evaluate the effectiveness of the project plan with employees.",
		image:"./img/managingthebudget.jpg"
	},
	{
		color: '#4970b2',
		text: 'Managing and Communicatingt',
		icon: './img/icons/icon7.png',
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum delectus, libero, accusantium dolores inventore obcaecati placeat cum sapiente vel laboriosam similique totam id ducimus aperiam, ratione fuga blanditiis maiores.",
		image:"./img/comunicationj.jpg"
	},
	{
		color: '#4970b2',
		text: 'Reporting',
		icon: './img/icons/icon1.png',
		description: "Investors and contractors are liable for construction defects up to 10 years after a project has been completed, and there are dozens of stories about firms that paid the price for not being able to prove they weren't negligent. Your best defense against litigation is to keep thorough, professional daily reports that show your team is doing their job the right way.",
		descriptionTwo: "Investors and contractors are liable for construction defects up to 10 years after a project has been completed, and there are dozens of stories about firms that paid the price for not being able to prove they weren't negligent. Your best defense against litigation is to keep thorough, professional daily reports that show your team is doing their job the right way.",
		image:"./img/reporting.jpg"
	}
]

let itemTwo = ""
itemsArray.forEach((el, ind)=> {
	let {color, text, icon} = el
	el.delay = ind * 250
	itemTwo += `<li class="bom"  data-text="${text}" style="--color: ${color}; font-weight:lighter; --delay: ${el.delay}ms">
				<span class="txt" style:"font-weight:lighter;">${text}</span>
				<img class="itemImg" style:"font-weight:lighter;" src="${icon}">
			</li>`
})

itemsPartTwo.innerHTML = itemTwo


$('ul[id*="items"] li').on('click', function(e) {
	e.preventDefault();
	let text = $(this).data('text')

	let finded = [...itemsArray,...itemsArr].find(e=> e.text == text)
	$('#name').text(finded.text)
	$('#text').text(finded.description || '')
	$('#textTwo').text(finded.descriptionTwo || '')
	$('#textThree').text(finded.descriptionThree || '')
	$('#imgimg').attr('src', finded.image || '')
	
	$('.modal').addClass('is-visible');
  });

$(".close").on("click", function(){
	$('.modal').removeClass('is-visible');
})





// $(document).ready(function () {
// 	function hex_initial_animation() {
// 		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
// 		$(".hex-wrap").velocity("callout.pulse");
// 		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
// 		}
// 	hex_initial_animation();

// var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
// function hovernotify() {
//     $(".hover-notify").velocity("callout.tada");
// }
// function myStopFunction() {
// $(".hover-notify").velocity('stop', true).velocity("fadeOut");
//     clearInterval(hoverdetect);
// }

// 		$(".hex-init").mouseenter(function () {
			
// 			myStopFunction();

// 			var title_color =  $(this).parent().attr("data-color");
// 			var title_name = $(this).parent().attr("data-title");
// 			var desc_name = $(this).parent().attr("data-content");

// 				function hex_description() {
// 					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
// 					$('.' + desc_name).siblings().removeClass('desc-active');
// 						setTimeout(function() {
// 							$('.' + desc_name).addClass('desc-active');
// 							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
// 							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
// 							$('.code-title').text(title_name)
// 						}, 0);
// 			    }
// 			    hex_description();

// 				$(this).parent().addClass('hexactive'); 
// 				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

// 			}).mouseleave(function () {
// 				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
// 			});
// });















   