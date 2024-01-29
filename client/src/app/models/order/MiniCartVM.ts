export class MiniCartVM {
    itemCount: number;
    ecoPct: number;
    noOfTooLate: number;
    agreementPct: number;
    totalPrice: number;
}

/*
$miniCart.attr("data-itemcount", obj.count), $count.html(obj.count);
            $organicCount.html(obj.organicCount + " %");
            $agreementCount.html(obj.agreementCount + " %");
            if (obj.noOfTooLate !== "undefined") {
                $noOfTooLate.text(obj.noOfTooLate);
                if (obj.noOfTooLate < 1) {
                    $delayMessage.hide();
                } else {
                    $delayMessage.show();
                }
            }
*/