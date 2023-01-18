import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
})
export class RecipeComponent implements OnInit {
  name = "Lemonade";
  ingredients = {
    ingredient1: "lemon",
    ingredient2: "water",
    ingredient3: "sugar",
  };

  constructor() {}
// called only once
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  getUserId(): string {
    return "001";
  }
}
