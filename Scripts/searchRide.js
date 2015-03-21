/**
 * Created by Alex on 3/22/2015.
 */

function reverseDirection(){
    var sourceElement = $("#sourceSearchInput");
    var destinationElement = $("#destinationSearchInput");
    var sourceVal = sourceElement.val();
    sourceElement.val(destinationElement.val());
    destinationElement.val(sourceVal);
}