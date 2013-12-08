//---------------- Handle Breadcrumbs on Category page -----------------

// This is a hack to meet the deadline. It should be handled in Liquid really.
// The liquid implementation that exists in the templates is sub-par and this addresses it's problems for now.


// Handle breadcrumbs on category/collection pages
if ($('.breadcrumbs-data').length > 0) {
	var this_cat = $('.breadcrumbs-data > p').text();
	var list = [];

	//Function to lookup title from handle and return the last word (ie. subcategory)
	function getTitleFromHandle(handle) {
		for(i=0; i<categories.length; i++) {
			if (categories[i].handle == handle) {
				result =  categories[i].title.toLowerCase().split(" > ")
				if (result.length > 1) {
					return result[1];
				} else {
					return result[0];
				}
			}
		}
	}

	if (this_cat.indexOf("-") > -1) {
		//We are in a subcategory page.
		c = this_cat.split("-");
		list.push("<li><a href=\"/collections/" + c[0] + "/\">" + getTitleFromHandle(c[0]) + "</a></li>");
		list.push("<li><a href=\"/collections/" + this_cat + "/\">" + getTitleFromHandle(this_cat) + "</a></li>");

	} else {
		//We are on a main category page.
		list.push("<li><a href=\"/collections/" + this_cat + "/\">" + getTitleFromHandle(this_cat) + "</a></li>");
	}


	// Add the new breadcrumbs.
	for(i=0; i<list.length; i++) {
		$(".breadcrumbs").append(list[i]);
	}
}




// Handle breadcrumbs on product pages
// This bit is super-duper hacky and about as inelegant as it's possible to be.

if ($('.product-breadcrumbs-data').length > 0) {
	var minor_c = [];

	for(i=0; i<product_categories.length; i++) {
		if (product_categories[i].collection.title.indexOf(" > ") > -1) {
			//If the category is a minor one...
			minor_c.push(product_categories[i].collection);
		}
	}

	// Handle the major categories. Produces a list item in the form "foo / bar" for them.
	li1 = "<li>"
	var major_categories = []
	for(i=0; i<minor_c.length; i++) {

		major_cat = minor_c[i].title.split(" > ")[0].toLowerCase();

		//Check for duplicates
		if ($.inArray(major_cat, major_categories) == -1) {
			li1 += "<a href=\"/collections/" + major_cat + "/\">" + major_cat + "</a> / ";
		}

		//Add the major category to a list of them.
		major_categories.push(major_cat);
	}
	li1 = li1.slice(0, -3); // Remove last 4 characters
	li1 += "</li>"



	// Handle the minor categories. Produces a list item in the form "foo / bar" for them.
	li2 = "<li>"
	for(i=0; i<minor_c.length; i++) {
		console.log(minor_c[i].title);
		li2 += "<a href=\"/collections/" + minor_c[i].handle + "/\">" + minor_c[i].title.split(" > ")[1] + "</a> / ";
	}
	li2 = li2.slice(0, -3); // Remove last 4 characters
	li2 += "</li>"

	//Inject into list
	$(".breadcrumbs li:last").before(li1);
	$(".breadcrumbs li:last").before(li2)

}