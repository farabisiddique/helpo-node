$(document).ready(function() {

    const filterSelections = $('#filterSelections');
    const clearFilters = $('#clearFilters');
    let locations = [
        "Australia",
        "Bangalore, Karnataka, India",
        "Brazil",
        "California, USA",
        "Canada",
        "Chicago, Illinois, USA",
        "Delhi, Delhi, India",
        "Edinburgh, Scotland, UK",
        "England, UK",
        "Houston, Texas, USA",
        "India",
        "Karnataka, India",
        "London, England, UK",
        "Los Angeles, California, USA",
        "Maharashtra, India",
        "Melbourne, Victoria, Australia",
        "Miami, Florida, USA",
        "Montreal, Quebec, Canada",
        "Mumbai, Maharashtra, India",
        "New South Wales, Australia",
        "New York City, New York, USA",
        "New York, USA",
        "Ontario, Canada",
        "Phoenix, Arizona, USA",
        "Quebec, Canada",
        "Rio de Janeiro, Rio de Janeiro, Brazil",
        "San Antonio, Texas, USA",
        "Scotland, UK",
        "São Paulo, Brazil",
        "São Paulo, São Paulo, Brazil",
        "Sydney, New South Wales, Australia",
        "Texas, USA",
        "Toronto, Ontario, Canada",
        "UK",
        "USA",
        "Vancouver, British Columbia, Canada"
    ];

    // A utility function to generate filter buttons
    function generateFilterButton(category, name, value) {
        filterSelections.find(`.btn[data-category="${category}"]`).remove();
        if (value) {
            filterSelections.append(`<button class="btn filterBtnBelowSearch rounded-pill mr-2 mt-2 mb-1" data-category="${category}">${name}: ${value} <i class="fas fa-times close-filter"></i></button>`);
        }
        toggleClearFiltersButton();
    }

    // Display or hide the 'Clear Filters' button based on the existence of filter buttons
    function toggleClearFiltersButton() {
        if (filterSelections.find('.btn').length) {
            clearFilters.show();
        } else {
            clearFilters.hide();
        }
    }

    // Reset all filters to their default state
    function resetAllFilters() {
        $('#iWantFilter .active, #categoryFilter .active, #talentTypeFilter .active').removeClass('active');
        $('#locationInput, #searchInput').val('');
        $('.star').removeClass('active selected');
        $('#hourlyRate').val($('#hourlyRate').attr('min'));
        $('#filterSelections .btn').remove();
        toggleClearFiltersButton();
    }

    $("#locationInput").autocomplete({
        // source: [

        // ],
        source: locations,
        select: function(event, ui) {
            generateFilterButton('location', 'Location', ui.item.value);
        }
    });

    $("#locationInput").on('keydown', function(e) {
        if (e.which == 13) { 
            e.preventDefault();
            generateFilterButton('location', 'Location', $(this).val());
        }
    });

    $(".star-rating .star").hover(
        function() {
            $(this).addClass('active').prevAll().addClass('active');
        },
        function() {
            $(this).removeClass('active').siblings().not('.selected').removeClass('active');
        }
    ).click(function() {
        // ... [the logic for star click]

        let clickedStar = $(this);
        let stars = $(".star-rating .star");
        let clickedIndex = stars.index(clickedStar);
        
        if (clickedStar.hasClass('selected')) {
            // If the clicked star is already selected, unselect it and all stars after it.
            clickedStar.removeClass('selected').nextAll().removeClass('selected');
        } else {
            // Select the clicked star and all stars before it.
            clickedStar.addClass('selected').prevAll().addClass('selected');
            // Unselect all stars after the clicked star.
            clickedStar.nextAll().removeClass('selected');
        }
        let selectedCount = $(".star-rating .star.selected").length;
        // Filter details
        let filterName = "Ratings";
        let filterValue = selectedCount + " Stars";

        // Remove existing button of the same filter category
        let filterCategory = filterName.toLowerCase().replace(/\s+/g, '-'); // Convert "Ratings" to "ratings"
        $('#filterSelections .btn[data-category="' + filterCategory + '"]').remove();

        if (selectedCount > 0) {
            // generateFilterButton(filterName, filterValue, filterCategory);
            generateFilterButton(filterCategory,filterName, filterValue);
        }

        toggleClearFiltersButton();
        // generateFilterButton('ratings', 'Ratings', $(".star-rating .star.selected").length + " Stars");
    });

    $('.filter-link').on('click', function(e) {
        e.preventDefault(); 
        const filterName = $(this).parents('.filterCatDiv').find('strong').text();
        $(this).addClass('active').siblings('.filter-link').removeClass('active');
        generateFilterButton(filterName.toLowerCase().replace(/\s+/g, '-'), filterName, $(this).text().trim());
    });

    $(document).on('click', '.close-filter', function() {
        const category = $(this).parent('.btn').data('category');
        console.log(category);
        const resetActions = {
            'i-want': () => $('#iWantFilter .active').removeClass('active'),
            'category': () => $('#categoryFilter .active').removeClass('active'),
            'location': () => $('#locationInput').val(''),
            'talent-type': () => $('#talentTypeFilter .active').removeClass('active'),
            'ratings': () => $('.star').removeClass('active selected'),
            'hourly-rate': () => $('#hourlyRate').val($('#hourlyRate').attr('min'))
        };
        resetActions[category] && resetActions[category]();
        $(this).parent('.btn').remove();
        toggleClearFiltersButton();
    });

    clearFilters.on('click', resetAllFilters);

    $("#searchInput").on("input", function() {
        $("#clearSearch").toggle(Boolean($.trim($(this).val()).length));
    });

    $("#clearSearch").click(function() {
        $("#searchInput").val('').trigger('input');
    });
});
