import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme,IPost } from 'src/app/core/interfaces';
import { ThemeService } from 'src/app/core/theme.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-themes-detail-page',
  templateUrl: './themes-detail-page.component.html',
  styleUrls: ['./themes-detail-page.component.css']
})
export class ThemesDetailPageComponent implements OnInit {
theme:ITheme;
canSubscribe:boolean = false;
isLoggedIn:boolean = this.userService.isLogged;
hasLiked:boolean =false;
  constructor(
    private activatedRoute:ActivatedRoute,
    private themeService:ThemeService,
    private userService:UserService) { }

  ngOnInit(): void {
    const themeId =this.activatedRoute.snapshot.params['themeId'];
  
    this.themeService.loadThemeById(themeId).subscribe(theme=>{
      this.theme = theme;
      this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d')
      // this.hasLiked = !this.theme.posts.likes.includes('5fa64b162183ce1728ff371d')

      console.log(this.theme)
      // console.log(this.theme)

    })
 
  }
  canLike(comment:IPost){
    return !comment.likes.includes('5fa64b162183ce1728ff371d')
  }
  likeIt(comment:IPost){

    return comment.likes.push('5fa64b162183ce1728ff371d')
  }
  disLike(comment:IPost){

    return comment.likes.push('5fa64b162183ce1728ff371d')

  }
}
