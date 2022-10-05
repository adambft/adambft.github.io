function create_draw_table() {
    let div_elem_to_add_table = document.getElementById("draw_table1_here")

    console.log(div_elem_to_add_table)

    let new_table = "<table class='pretty_table_1'>"
    let row_to_add = ""
    for (let i=0; i<40; i++) {
        row_to_add += "<td></td>"
    }

    row_to_add = "<tr>" + row_to_add + "</tr>"

    for (let i=0; i<20; i++) {
        new_table += row_to_add
    }

    new_table += "</table>"

    div_elem_to_add_table.innerHTML = new_table
}