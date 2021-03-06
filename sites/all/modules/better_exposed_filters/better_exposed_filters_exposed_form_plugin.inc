<?php
// $Id: better_exposed_filters_exposed_form_plugin.inc,v 1.3 2010/02/01 00:19:55 mikeker Exp $
class better_exposed_filters_exposed_form_plugin extends views_plugin_exposed_form_basic {

  function option_definition() {
    $options = parent::option_definition();
    
    // Add Better Exposed Filters options to those saved by Views
    $options['bef_format'] = array('default' => 'default');
    $options['bef_select_all_none'] = array('default' => FALSE);
    $options['bef_filter_description'] = array('default' => '');

    return $options;
  }
}