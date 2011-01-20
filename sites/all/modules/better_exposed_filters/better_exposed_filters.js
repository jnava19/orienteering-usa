if (Drupal.jsEnabled) {
  $(document).ready(function() {
    /*
     * Add Select all/none links to specified checkboxes
     */
    var selected = $('.form-checkboxes.bef-select-all-none');
    if (selected.length) {
      var selAll = Drupal.t('Select All');
      var selNone = Drupal.t('Select None');
      
      // Set up link and event handlers
      var link = $('<a class="bef-toggle" href="#">'+ selAll +'</a>')
      link.click(function() {
        if (selAll == this.text) {
          // Select all the checkboxes
          $(this)
            .html(selNone)
            .siblings('.form-item').each(function() {
              $('input:checkbox', this).attr('checked', 'checked');
            });
        }
        else {
          // Unselect all the checkboxes
          $(this)
            .html(selAll)
            .siblings('.form-item').each(function() {
              $('input:checkbox', this).attr('checked', '');
            });
        }
      });

      // Add link to the page.
      selected.each(function(index) {
        link.insertBefore($('.form-item:first', this));
        
        // Check if all checkboxes are already checked by default and switch to Select None if they are
        var all_checked = true;
        $('input:checkbox', this).each(function() {
          if (!this.checked) {
            all_checked = false;
            return false;   
          }
        });
        if (all_checked) {
          link.click();
        }
      });
    }
    
    /*
     * Turn the "Add select all/none" on and off based on other settings
     * 
     * @TODO:
     * When Drupal upgrades to jQuery 1.3, we can use this to provide addition UX support
     * (Uncomment the similar block in better_exposed_filters.module)
     * 
    $('#edit-options-expose-bef-format, #edit-options-expose-single').live('click', function() {
      if (('bef' == $('#edit-options-expose-bef-format').val()) 
          && ('checked' == $('#edit-options-expose-single').attr('checked'))) {
        $('#edit-options-expose-bef-select-all-none').attr('disabled', '');
      }
      else {
        $('#edit-options-expose-bef-select-all-none').attr('disabled', 'disabled');
      }
      return false;     // Stop event from propagating further
    });
    */
  });
}
